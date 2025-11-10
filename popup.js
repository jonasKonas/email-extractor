document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, { action: "getEmails" });
  
  const list = document.getElementById("email-list");
  list.innerHTML = "";

  if (!response || response.emails.length === 0) {
    list.innerHTML = "<p>No emails found.</p>";
    return;
  }

  response.emails.forEach(email => {
    const div = document.createElement("div");
    div.className = "email-item";
    div.textContent = email;
    div.addEventListener("click", () => navigator.clipboard.writeText(email));
    list.appendChild(div);
  });

  document.getElementById("copy-all").addEventListener("click", () => {
    navigator.clipboard.writeText(response.emails.join(", "));
    alert("All emails copied!");
  });
});
