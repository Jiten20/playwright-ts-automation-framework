import { test, expect } from '../../../fixtures/baseTest';
import { testData } from '../../../test-data/testData';


test.describe('Login Validation', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('@smoke @critical Verify standard user can login successfully', async ({ loginPage, productsPage }) => {
        await test.step('Login with Valid user', async () => {
            await loginPage.login(testData.users.valid.username,
                testData.common.password
            );
        });
        await loginPage.verifyLoginSuccess();
        await productsPage.verifyProductsPage();
    });

    test('@negative Locked User Login', async ({ loginPage }) => {
        await test.step('Login with locked user', async () => {
            await loginPage.login(testData.users.locked.username,
                testData.common.password
            );
        });
        await loginPage.verifyErrorMessage(testData.errorMessages.lockedUser);
    });

    test('@negative Invalid User Login', async ({ loginPage }) => {
        await test.step('Login with invalid user', async () => {
            await loginPage.login(testData.users.invalid.username,
                testData.common.invalidPassword
            );
        });
        await loginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });

    test('@negative Verify login without credentials', async ({ loginPage }) => {
        await test.step('Login without credentials', async () => {
            await loginPage.login(testData.users.empty.username,
                testData.users.empty.password
            );
        });
        await loginPage.verifyErrorMessage(
            testData.errorMessages.usernameRequired
        );
    });
});
