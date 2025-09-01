# CHARUSAT — Student Feedback & Department Review

## How to run locally

1. Download all files (`index.html`, `review.html`, `styles.css`, `app.js`) into a folder.
2. Open `index.html` in your browser (double-click or right-click → Open with browser).
3. Log in with any username/password (no real authentication).
4. Fill out the feedback form and submit. All data is stored only in your browser (localStorage).

## How to demo in class
- Project is fully client-side: no backend, no network calls, no data leaves the browser.
- Show students the code in `app.js` to explain how data is stored, validated, and exported.
- Use the "Export all responses (CSV)" button to download all feedback for review.
- Use the "Clear local data" button (with confirmation) to reset all stored feedback.

## How to enable a backend later
- This project is designed for local, client-only use. To add a backend, you would need to:
  - Replace or supplement the localStorage logic in `app.js` with AJAX/fetch calls to your server.
  - Implement secure server-side storage and authentication.
  - Update the privacy note and consent language accordingly.
- **Do not include backend code in this version.**

## Ethical usage notes
- This form is for educational feedback only. Do not use for collecting sensitive or personal data.
- All responses are stored locally in the user's browser unless exported.
- For privacy or grievance issues, direct students to official university channels.
- Do not misrepresent this as an official CHARUSAT system unless authorized.

---

**Accessibility, privacy, and legal note:**
- This form is for educational feedback and stores responses locally in your browser. Do not enter sensitive personal data. Contact your department office for official grievance procedures.
