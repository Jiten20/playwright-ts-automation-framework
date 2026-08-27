import { test, expect } from '../../../fixtures/baseTest';
import { users } from '../../../test-data/users';

test.describe('Problem User Validation', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    })

    test('@regression Verify problem user displays duplicate product images', async ({ loginPage, productsPage }) => {

        await loginPage.login(users.problem.username, users.common.password);
        await productsPage.verifyProductsPage();
        await productsPage.verifyProductImages();
    });

    test('@regression Verify problem user cart count is empty', async ({ loginPage, productsPage }) => {

        await loginPage.login(users.problem.username, users.common.password);
        await productsPage.verifyProductsPage();
        await productsPage.verifyCartCount(0);
    });

    test('@regression Verify 404 error on about page', async ({ loginPage, productsPage, navigation, errorPage }) => {

        await loginPage.login(users.problem.username, users.common.password);
        await productsPage.verifyProductsPage();
        await navigation.openMenu();
        await navigation.verifyAbout();
        await errorPage.verify404Page();
    });


});