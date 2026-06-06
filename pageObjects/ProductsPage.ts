import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly addToCartBtn: Locator;
  readonly addToCartLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.addToCartBtn = page.locator('.inventory_item');
    this.addToCartLink = page.locator('.shopping_cart_link');
  }
  async verifyProductsPage() {
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart(productName: string) {
      await this.addToCartBtn.filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' }).click();
  }

  async selectAddToCartLink() {
    await this.addToCartLink.click();
  }
}