import { test, expect } from '../fixtures/baseTest';
import { testData } from '../utils/testData';

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
            testData.users.valid.password
        );
        await productsPage.verifyProductsPage();
    });

    await test.step('Add product to cart', async () => {
        await productsPage.addProductToCart(testData.productDetails.name);
        await productsPage.selectAddToCartLink();
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

test('@regression Validate Invalid login', async ({ loginPage }) => {

    await test.step('Login with invalid user', async () => {
        await loginPage.navigate();
        await loginPage.login(
            testData.users.invalid.username,
            testData.users.invalid.password
        );
    });

    await test.step('Verify login error message', async () => {
        await loginPage.verifyError();
    });
});