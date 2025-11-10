# Email Extractor – Copy Emails Easily

**Email Extractor** is a lightweight Chrome extension that scans any webpage and extracts all email addresses, even those that cannot be copied normally. It displays the emails in a clean popup and allows you to copy them individually or all at once.

---

## Features

- Extracts all visible and hidden email addresses on the current page.
- Displays extracted emails in a popup window.
- Click any email to copy it to the clipboard.
- Copy all emails with one click.
- Works entirely offline — no data leaves your browser.

---

## Installation (for local use / development)

You can add this extension to Chrome (or any Chromium-based browser) manually:

1. Clone or download this repository:
   ```
   git clone https://github.com/yourusername/email-extractor.git
   ```
2. Open Chrome and go to:
   ```
   chrome://extensions
   ```
3. Enable **Developer mode** (top-right corner).
4. Click **Load unpacked**.
5. Select the `email-extractor` folder (the one containing `manifest.json`).
6. The extension should now appear in your toolbar. Optionally, click the **pin icon** to keep it visible.

---

## Usage

1. Open any webpage that contains email addresses.
2. Click the **Email Extractor** icon in the toolbar.
3. A popup will appear listing all found emails.
4. Click on an individual email to copy it to the clipboard, or click **Copy All** to copy all emails at once.

---

## Permissions Explained

- `activeTab` — Needed to scan the currently active webpage for email addresses.
- `clipboardWrite` — Required to copy extracted emails to the clipboard.
- `scripting` — Required to inject the content script that extracts emails.
- `host permissions` — Used to read content from the pages you visit. No data is sent externally.

> **Privacy:** This extension works entirely locally. No email addresses or data leave your browser.

---

## Screenshots

<img width="258" height="257" alt="image" src="https://github.com/user-attachments/assets/71dbdca0-481a-4573-af36-c1ce25f0bd65" />


---

## License

MIT License. See [LICENSE](LICENSE) for details.

