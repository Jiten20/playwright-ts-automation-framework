import { test, expect } from '../../../fixtures/baseTest';
import { users } from '../../../test-data/users';
import { errorMessages } from '../../../test-data/messages';

test.describe('Login Validation', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('@smoke @critical Verify standard user can login successfully', async ({ loginPage, productsPage }) => {
        await test.step('Login with Valid user', async () => {
            await loginPage.login(users.valid.username,
                users.common.password
            );
        });
        await loginPage.verifyLoginSuccess();
        await productsPage.verifyProductsPage();
    });

    test('@negative Locked User Login', async ({ loginPage }) => {
        await test.step('Login with locked user', async () => {
            await loginPage.login(users.locked.username,
                users.common.password
            );
        });
        await loginPage.verifyErrorMessage(errorMessages.lockedUser);
    });

    test('@negative Invalid User Login', async ({ loginPage }) => {
        await test.step('Login with invalid user', async () => {
            await loginPage.login(users.invalid.username,
                users.common.invalidPassword
            );
        });
        await loginPage.verifyErrorMessage(
            errorMessages.invalidCredentials
        );
    });

    test('@negative Verify login without credentials', async ({ loginPage }) => {
        await test.step('Login without credentials', async () => {
            await loginPage.login(users.empty.username,
                users.empty.password
            );
        });
        await loginPage.verifyErrorMessage(
            errorMessages.usernameRequired
        );
    });
});
