import { test, expect } from '../../../fixtures/baseTest';
import { users } from '../../../test-data/users';
import { productDetails } from '../../../test-data/products';

test.describe('Product Validation', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    })

    test('@critical Verify Product page is displayed', async ({ loginPage, productsPage }) => {
        await loginPage.login(users.valid.username,
            users.common.password);
        await productsPage.verifyProductsPage();
    });

    test('@regression Verify six products are displayed', async ({ loginPage, productsPage }) => {
        await loginPage.login(users.valid.username,
            users.common.password);
        await productsPage.verifyProductCount();

    })

    test('@regression Add multiple products and verify cart count', async ({ loginPage, productsPage }) => {
        await loginPage.login(users.valid.username,
            users.common.password);
        const products = [
            productDetails.backpack.name,
            productDetails.bikeLight.name
        ]
        for (const product of products) {
            await productsPage.addProductToCart(product);
        }
        await productsPage.verifyCartCount(2);
    })
});