import { Page, Locator, expect } from '@playwright/test';

export class ErrorPage {
    readonly page: Page;
    readonly notFoundHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.notFoundHeading = page.getByRole('heading', {
            name: '404 - Page Not Found'
        });
    }

    async verify404Page() {
        await expect(this.notFoundHeading).toBeVisible();
    }
}