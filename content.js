(() => {
  function extractEmails() {
    const textContent = document.body.innerText;
    const htmlContent = document.body.innerHTML;
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = [...new Set([...textContent.matchAll(regex), ...htmlContent.matchAll(regex)].map(m => m[0]))];
    return matches;
  }

  // Listen for popup request
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "getEmails") {
      const emails = extractEmails();
      sendResponse({ emails });
    }
  });
})();
