import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { ProductsPage } from '../pageObjects/ProductsPage';
import { CartPage } from '../pageObjects/CartPage';
import { CheckoutPage } from '../pageObjects/CheckoutPage';
import { NavigationComponent } from '../pageObjects/components/NavigationComponent';
import { ErrorPage } from '../pageObjects/ErrorPage';

type PageFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  navigation: NavigationComponent;
  errorPage: ErrorPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  navigation: async ({ page }, use) => {
    await use(new NavigationComponent(page));
  },

  errorPage: async({page}, use)=>{
    await use(new ErrorPage(page));
  }
});

export { expect };