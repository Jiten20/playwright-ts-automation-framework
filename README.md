# Playwright TypeScript Automation Framework

A scalable end-to-end automation framework built using **Playwright and TypeScript** following industry-standard test automation practices.

The framework demonstrates a maintainable automation architecture using:

- Page Object Model (POM)
- Playwright Fixtures
- Test Data Management
- Smoke and Regression test separation
- HTML Reporting
- Trace Viewer
- Screenshot capture on failure
- GitHub Actions CI/CD integration


## 🚀 Features

- Playwright + TypeScript
- Page Object Model
- Custom Fixtures for dependency injection
- Reusable page classes
- Centralised test data management
- Smoke test execution
- Regression test execution
- HTML test reports
- Screenshot on failure
- Trace Viewer debugging
- GitHub Actions pipeline


# 📁 Project Structure

```
playwright-ts-automation-framework
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── baseTest.ts
│
├── pageObjects/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   └── testData.ts
│
├── tests/
│   │
│   ├── smoke/
│   │   └── checkout.spec.ts
│   │
│   └── regression/
│       │
│       ├── authentication/
│       │   └── login-validation.spec.ts
│       │
│       ├── products/
│       │
│       ├── cart/
│       │
│       ├── checkout/
│       │
│       └── performance/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```


# 🏗 Framework Architecture

The framework follows a layered architecture:

```
Test Specification
        |
        ↓
Page Object Layer
        |
        ↓
Playwright Locators
        |
        ↓
Browser
```


## Page Object Model

Each application page has a dedicated class responsible for:

- Locators
- User actions
- Validation methods


Example:

```typescript
await loginPage.login(username, password);

await loginPage.verifyErrorMessage(message);
```


Benefits:

- Reduces duplicate code
- Improves maintainability
- Keeps tests readable
- Locator changes are managed in one place


# 🔌 Playwright Fixtures

Custom fixtures are implemented for dependency injection.

Example:

```typescript
test('Login validation', async ({ loginPage }) => {

    await loginPage.login(
        username,
        password
    );

});
```


Instead of creating objects inside every test:

```typescript
const loginPage = new LoginPage(page);
```

objects are managed centrally through:

```
fixtures/baseTest.ts
```


Benefits:

- Cleaner tests
- Reusable page instances
- Better scalability


# 📊 Test Data Management

Test data is separated from test implementation.

Location:

```
test-data/
└── testData.ts
```


Example:

```typescript
users:{
    valid:{
        username:'standard_user'
    },

    locked:{
        username:'locked_out_user'
    }
}
```


Benefits:

- Avoids hardcoded values
- Easy maintenance
- Supports multiple test scenarios


# 🧪 Test Coverage

## Authentication Validation

Current implemented scenarios:

| Scenario | Status |
|---|---|
| Standard user login | ✅ PASS |
| Locked user validation | ✅ PASS |
| Invalid credentials | ✅ PASS |
| Empty credentials validation | ✅ PASS |


Example test:

```
tests/regression/authentication/login-validation.spec.ts
```


# ⚙️ Installation

## Prerequisites

- Node.js 18+
- npm


Install dependencies:

```bash
npm install
```


Install Playwright browsers:

```bash
npx playwright install
```


# ▶️ Running Tests


## Execute all tests

```bash
npm test
```


## Execute smoke tests

```bash
npm run test:smoke
```


## Execute regression tests

```bash
npm run test:regression
```


## Execute specific test

```bash
npx playwright test tests/regression/authentication/login-validation.spec.ts
```


# 📈 Reporting

Playwright HTML reporting is enabled.

Generate report:

```bash
npx playwright show-report
```


Reports provide:

- Test execution status
- Failure details
- Screenshots
- Trace information


# 🔍 Trace Viewer

Trace Viewer helps analyse failed executions.

It provides:

- DOM snapshots
- Screenshots
- Network information
- Step-by-step execution


Command:

```bash
npx playwright show-trace trace.zip
```


# 🔄 CI/CD Integration

GitHub Actions is configured for automated execution.

Pipeline flow:

```
Code Push
    |
    ↓
GitHub Actions
    |
    ↓
Install Dependencies
    |
    ↓
Install Playwright Browsers
    |
    ↓
Execute Tests
    |
    ↓
Publish Report
```


Benefits:

- Early defect detection
- Automated regression execution
- Faster feedback
- Consistent execution


# 🛠 Technology Stack

| Tool | Purpose |
|---|---|
| Playwright | End-to-end automation |
| TypeScript | Programming language |
| Node.js | Runtime |
| GitHub Actions | CI/CD |
| HTML Reporter | Test reporting |
| Git | Version control |


# 🔮 Future Enhancements

Planned improvements:

- Product validation automation
- Cart workflow automation
- Checkout validation
- API automation integration
- Visual regression testing
- Parallel execution optimisation
- Environment configuration
- Docker execution


# 👨‍💻 Author

**Jiten Motwani**

Senior QA Automation Engineer

Skills:

- Playwright
- Cypress
- Selenium
- API Automation
- CI/CD
- Test Framework Design