import { test, expect } from '../../fixtures/baseTest';
import { testData } from '../../test-data/testData';

test('@smoke Validate Product order', async ({
    loginPage,
    productsPage,
    cartPage,
    checkoutPage
}) => {

    await test.step('Login with valid user', async () => {
        await loginPage.navigate();
        await loginPage.login(
            testData.users.valid.username,
            testData.common.password
        );
        await productsPage.verifyProductsPage();
    });

    await test.step('Add product to cart', async () => {
        await productsPage.addProductToCart(testData.productDetails.backpack.name);
        await productsPage.openCart();
    });

    await test.step('Checkout product', async () => {
        await cartPage.selectCheckout();
        await checkoutPage.fillCheckoutDetails(
            testData.checkoutDetails.firstName,
            testData.checkoutDetails.lastName,
            testData.checkoutDetails.postalCode
        );
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();
    });

    await test.step('Verify order success message', async () => {
        const successMessage = await checkoutPage.getSuccessMessage();
        await expect(successMessage).toHaveText('Thank you for your order!');
    });
});
