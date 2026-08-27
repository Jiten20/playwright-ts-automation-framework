import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly selectProduct: Locator;
  readonly productCount: Locator;
  readonly cartLink: Locator;
  readonly sortProducts: Locator;
  readonly productPrices: Locator;
  readonly cartBadge: Locator;
  readonly productImages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.selectProduct = page.locator('.inventory_item');
    this.productCount = page.locator('[data-test="inventory-item"]');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortProducts = page.locator('.product_sort_container');
    this.productPrices = page.locator('[data-test="inventory-item-price"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.productImages = page.locator('[data-test="inventory-item"] img');

  }
  async verifyProductsPage() {
    await expect(this.title).toHaveText('Products');
  }

  async verifyProductCount() {
    await expect(this.productCount).toHaveCount(6);
  }

  async addProductToCart(productName: string) {
    await this.selectProduct.filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortProductsByATOZ(value: string) {
    await this.sortProducts.selectOption(value);
  }

  async verifyCartCount(expectedCount: number) {
    if (expectedCount === 0) {
      await expect(this.cartBadge).not.toBeVisible();
    }
    else {
      await expect(this.cartBadge)
        .toHaveText(String(expectedCount));
    }

  }

  async verifyProductPricesGreaterThan(value: number) {
    const products = this.selectProduct;
    const count = await products.count();

    let addedCount = 0;

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);

      const priceText = await product
        .locator(this.productPrices)
        .innerText();

      const price = Number(priceText.replace('$', ''));

      if (price > value) {
        await product.getByRole('button', { name: 'Add to cart' }).click();
        addedCount++;
      }
    }

    await expect(this.cartBadge).toHaveText(String(addedCount));
  }

  /**
 * Validates that each product has a unique image.
 * Problem_user displays the same image for all products,
 * so this check compares total images against unique image count.
 */
  async verifyProductImages() {

    const images = await this.productImages.evaluateAll(img => img.map(img => img.getAttribute('src')));
    const uniqueimages = new Set(images);
    expect(uniqueimages.size).toBe(images.length);
  }
}
