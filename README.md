# 🧪 Cucumber + Playwright Test Automation Framework

This project is a UI test automation framework using [Cucumber.js](https://github.com/cucumber/cucumber-js) and [Playwright](https://playwright.dev/) with a clean structure under `src/`.

---

## 📁 Project Structure

cucumber-playwright-project/
├── package.json
├── cucumber.config.js
├── README.md
└── src/
├── features/
│ ├── login.feature
├── pages/
│ └── LoginPage.js (optional for Page Object Model)
└── support/
└── hooks.js (optional for before/after hooks)


## 🧰 Tech Stack

- ✅ **Playwright** - For browser automation
- ✅ **Cucumber.js** - For BDD-style test writing
- ✅ **Node.js / NPM** - JavaScript runtime and package manager

---

## 🚀 Getting Started

### 1. Clone the Repo (or create your own folder)

```bash
git clone <your-repo-url>
cd cucumber-playwright-project
2. Install Dependencies
bash
Copy
Edit
npm install
3. Install Playwright Browsers
bash
Copy
Edit
npx playwright install
4. Run Tests
bash
Copy
Edit
npm test
✅ Page Object Model (src/pages/)

✅ .env file for environment-specific URLs

✅ Hooks (src/support/hooks.js) for setup/teardown

✅ HTML reporting

📦 Example Command
bash
Copy
Edit
npm test

🧑‍💻 Author
Created by Chethani
Powered by 🧠 Cucumber + 🚀 Playwright
