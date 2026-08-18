import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly selectProduct: Locator;
  readonly addToCartLink: Locator;
  readonly sortProducts: Locator;
  readonly filterPrice: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.selectProduct = page.locator('.inventory_item');
    this.addToCartLink = page.locator('.shopping_cart_link');
    this.sortProducts = page.locator('.product_sort_container');
    this.filterPrice = page.locator('[data-test="inventory-item-price"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }
  async verifyProductsPage() {
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart(productName: string) {
    await this.selectProduct.filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' }).click();
  }

  async selectAddToCartLink() {
    await this.addToCartLink.click();
  }

  async sortProductsByATOZ(value: string) {
    await this.sortProducts.selectOption(value);
  }

  async verifyProductPricesGreaterThan(value: number) {
    const products = this.selectProduct;
    const count = await products.count();

    let addedCount = 0;

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);

      const priceText = await product
        .locator(this.filterPrice)
        .innerText();

      const price = Number(priceText.replace('$', ''));

      if (price > value) {
        await product.getByRole('button', { name: 'Add to cart' }).click();
        addedCount++;
      }
    }

    await expect(this.cartBadge).toHaveText(String(addedCount));
  }
}
