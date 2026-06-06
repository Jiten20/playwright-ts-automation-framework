# Playwright TypeScript Automation Framework

![Playwright Tests](https://img.shields.io/badge/Playwright-Automation-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-orange)

A scalable End-to-End (E2E) automation framework built using **Playwright** and **TypeScript**, following industry-standard automation practices such as **Page Object Model (POM)**, **Custom Fixtures**, **Test Tagging**, **Reporting**, and **GitHub Actions CI/CD**.

---

## 📁 Project Structure

```text
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
├── tests/
│   └── order.spec.ts
│
├── utils/
│   └── testData.ts
│
├── playwright-report/          ← HTML reports (generated)
├── test-results/               ← Screenshots, videos & traces
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Test Results Summary

| Suite            | Tests | Passing | Failing |
| ---------------- | ----- | ------- | ------- |
| Product Order    | 1     | ✅ 1     | 0       |
| Login Validation | 1     | ✅ 1     | 0       |
| **Total**        | **2** | ✅ **2** | **0**   |

### Product Order Flow

| # | Scenario                     | Status |
| - | ---------------------------- | ------ |
| 1 | Login with valid credentials | ✅ PASS |
| 2 | Add product to cart          | ✅ PASS |
| 3 | Complete checkout process    | ✅ PASS |
| 4 | Verify order confirmation    | ✅ PASS |

### Login Validation

| # | Scenario                       | Status |
| - | ------------------------------ | ------ |
| 1 | Login with invalid credentials | ✅ PASS |
| 2 | Verify error message           | ✅ PASS |

---

## ⚙️ Setup & Installation

### Prerequisites

* Node.js 18+
* npm 9+

### Clone Repository

```bash
git clone <repository-url>
cd playwright-ts-automation-framework
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## 🚀 Running Tests

| Command                   | Description                 |
| ------------------------- | --------------------------- |
| `npm test`                | Run all tests               |
| `npm run test:smoke`      | Run smoke tests             |
| `npm run test:regression` | Run regression tests        |
| `npm run test:headed`     | Run tests in headed mode    |
| `npm run report`          | Open Playwright HTML report |

### Examples

```bash
# Execute all tests
npm test

# Run smoke suite
npm run test:smoke

# Run regression suite
npm run test:regression

# Run in headed mode
npm run test:headed

# Open report
npm run report
```

---

## 🏷️ Test Tagging

The framework supports execution using tags.

### Smoke Tests

```typescript
test('@smoke Validate Product order', async () => {

});
```

Run:

```bash
npx playwright test --grep "@smoke"
```

### Regression Tests

```typescript
test('@regression Validate Invalid login', async () => {

});
```

Run:

```bash
npx playwright test --grep "@regression"
```

---

## 📊 Reporting

Playwright HTML Reports are generated automatically after execution.

Open the report:

```bash
npx playwright show-report
```

### Included Artifacts

* HTML Report
* Test Steps
* Screenshots on Failure
* Execution Traces
* Video Recordings

---

## 🏗️ Design Approach

### Page Object Model (POM)

This framework follows the **Page Object Model (POM)** design pattern.

```
Test File
    ↓
Page Object
    ↓
Playwright Actions
    ↓
Browser
```

Benefits:

* Better maintainability
* Reduced code duplication
* Reusable page methods
* Improved readability
* Easier scalability

---

### Custom Fixtures

The framework uses Playwright custom fixtures to inject page objects directly into tests.

Example:

```typescript
test('Validate Product order', async ({
  loginPage,
  productsPage,
  cartPage,
  checkoutPage
}) => {

});
```

Benefits:

* Cleaner test implementation
* Reduced object creation
* Better dependency management
* Industry-standard Playwright architecture

---

### Test Steps

The framework uses `test.step()` to improve report readability.

Example:

```typescript
await test.step('Login with valid user', async () => {
  await loginPage.login(username, password);
});
```

Benefits:

* Better HTML reports
* Easier debugging
* Clear execution flow
* Improved trace readability

---

### Selector Strategy

Selectors are chosen in the following priority order:

| Priority | Type        | Example                        |
| -------- | ----------- | ------------------------------ |
| ✅ 1      | data-testid | `[data-testid="login-button"]` |
| ✅ 2      | ID          | `#login-button`                |
| ✅ 3      | getByRole   | `getByRole('button')`          |
| ✅ 4      | Text        | `getByText('Checkout')`        |
| ⚠️ 5     | CSS Locator | `.inventory_item`              |

Avoid:

* Fragile XPath locators
* `nth-child()` selectors
* Styling-based locators
* Dynamic class names

---

### Page Objects

#### LoginPage

Handles login-related functionality.

* Navigate to application
* Login with credentials
* Verify error messages

#### ProductsPage

Handles product inventory actions.

* Verify Products page
* Add product to cart
* Navigate to cart

#### CartPage

Handles cart functionality.

* Verify cart contents
* Proceed to checkout

#### CheckoutPage

Handles checkout workflow.

* Enter checkout details
* Complete purchase
* Verify confirmation message

---

### Test Data Management

All test data is centralized in:

```text
utils/testData.ts
```

Example:

```typescript
export const testData = {
  users: {},
  checkoutDetails: {},
  productDetails: {}
};
```

Benefits:

* No hardcoded values
* Easier maintenance
* Better reusability

---

### Global Configuration

Configured in:

```text
playwright.config.ts
```

| Setting        | Value             | Purpose               |
| -------------- | ----------------- | --------------------- |
| timeout        | 30000 ms          | Maximum test duration |
| expect.timeout | 5000 ms           | Assertion timeout     |
| retries        | 2 (CI)            | Retry failed tests    |
| screenshot     | only-on-failure   | Capture screenshots   |
| trace          | retain-on-failure | Preserve traces       |
| video          | retain-on-failure | Record failures       |

---

## 🔄 CI/CD Integration (GitHub Actions)

The framework supports Continuous Integration using GitHub Actions.

### Pipeline Trigger

The workflow automatically executes when:

* Code is pushed to the repository
* A Pull Request is created

### Pipeline Steps

1. Checkout repository
2. Install Node.js
3. Install project dependencies
4. Install Playwright browsers
5. Execute automated tests
6. Publish test artifacts

### Benefits

* Automated regression validation
* Early defect detection
* Consistent execution across environments
* Faster feedback cycle

---

## 📝 .gitignore

```gitignore
# Dependencies
node_modules/

# Playwright Artifacts
playwright-report/
test-results/

# Build
dist/

# Environment Variables
.env

# OS Files
.DS_Store
Thumbs.db
```

---

## 🛠️ Tech Stack

| Tool           | Purpose                    |
| -------------- | -------------------------- |
| Playwright     | End-to-End Test Automation |
| TypeScript     | Programming Language       |
| Node.js        | Runtime Environment        |
| GitHub Actions | Continuous Integration     |
| HTML Reporter  | Test Reporting             |

---

## 🚀 Future Enhancements

* Environment Support (DEV / QA / UAT)
* API Automation using Playwright
* Data-Driven Testing
* Docker Integration
* Allure Reporting
* Parallel Execution Optimization
* Cross-Browser CI Matrix

---

## 📌 Key Highlights

* Playwright + TypeScript
* Page Object Model (POM)
* Custom Fixtures
* Smoke & Regression Tagging
* Positive & Negative Scenarios
* HTML Reporting
* Screenshots, Traces & Videos on Failure
* GitHub Actions CI/CD
* Scalable and Maintainable Framework Design
