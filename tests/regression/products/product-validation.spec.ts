import { test, expect } from '../../../fixtures/baseTest';
import { testData } from '../../../test-data/testData';

test.describe('Product Validation', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    })

    test('@critical Verify Product page is displayed', async ({ loginPage, productsPage }) => {
        await loginPage.login(testData.users.valid.username,
            testData.common.password);
        await productsPage.verifyProductsPage();
    });

    test('@regression Verify six products are displayed', async ({ loginPage, productsPage }) => {
        await loginPage.login(testData.users.valid.username,
            testData.common.password);
        await productsPage.verifyProductCount();

    })

    test('@regression Add multiple products and verify cart count', async ({ loginPage, productsPage }) => {
        await loginPage.login(testData.users.valid.username,
            testData.common.password);
        const products = [
            testData.productDetails.backpack.name,
            testData.productDetails.bikeLight.name
        ]
        for (const product of products) {
            await productsPage.addProductToCart(product);
        }
        await productsPage.verifyCartCount(2);
    })
});