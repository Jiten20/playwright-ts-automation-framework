# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\productOrder.spec.ts >> @smoke Validate Product order
- Location: tests\productOrder.spec.ts:4:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.title')
Expected: "Products1"
Received: "Products"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.title')
    14 × locator resolved to <span class="title" data-test="title">Products</span>
       - unexpected value "Products"

```

```yaml
- text: Products
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class ProductsPage {
  4  |   readonly page: Page;
  5  |   readonly title: Locator;
  6  |   readonly addToCartBtn: Locator;
  7  |   readonly addToCartLink: Locator;
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.title = page.locator('.title');
  11 |     this.addToCartBtn = page.locator('.inventory_item');
  12 |     this.addToCartLink = page.locator('.shopping_cart_link');
  13 |   }
  14 |   async verifyProductsPage() {
> 15 |     await expect(this.title).toHaveText('Products1');
     |                              ^ Error: expect(locator).toHaveText(expected) failed
  16 |   }
  17 | 
  18 |   async addProductToCart(productName: string) {
  19 |       await this.addToCartBtn.filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' }).click();
  20 |   }
  21 | 
  22 |   async selectAddToCartLink() {
  23 |     await this.addToCartLink.click();
  24 |   }
  25 | }
```