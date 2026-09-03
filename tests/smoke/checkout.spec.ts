import { test, expect } from '../../fixtures/baseTest';
import { users } from '../../test-data/users';
import { productDetails } from '../../test-data/products';
import { checkoutDetails } from '../../test-data/checkout';

test('@smoke Validate Product order', async ({
    loginPage,
    productsPage,
    cartPage,
    checkoutPage
}) => {

    await test.step('Login with valid user', async () => {
        await loginPage.navigate();
        await loginPage.login(
            users.valid.username,
            users.common.password
        );
        await productsPage.verifyProductsPage();
    });

    await test.step('Add product to cart', async () => {
        await productsPage.addProductToCart(productDetails.backpack.name);
        await productsPage.openCart();
    });

    await test.step('Checkout product', async () => {
        await cartPage.selectCheckout();
        await checkoutPage.fillCheckoutDetails(
            checkoutDetails.firstName,
            checkoutDetails.lastName,
            checkoutDetails.postalCode
        );
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();
    });

    await test.step('Verify order success message', async () => {
        const successMessage = await checkoutPage.getSuccessMessage();
        await expect(successMessage).toHaveText('Thank you for your order!');
    });
});
