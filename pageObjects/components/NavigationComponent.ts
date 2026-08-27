import { Page, Locator, expect } from '@playwright/test';

export class NavigationComponent {
    readonly burger: Locator;
    readonly allItemsLink: Locator;
    readonly aboutLink: Locator;
    readonly logoutLink: Locator;
    readonly resetAppLink: Locator;

    constructor(page: Page) {
        this.burger = page.locator('#react-burger-menu-btn');
        this.allItemsLink = page.locator('[data-test="inventory-sidebar-link"]');
        this.aboutLink = page.locator('[data-test="about-sidebar-link"]');
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
        this.resetAppLink = page.locator('[data-test="reset-sidebar-link"]');
    }

    async openMenu() {
        await this.burger.click();
    }
    async verifyAllitems() {
        await this.allItemsLink.click();
    }

    async verifyAbout() {
        await this.aboutLink.click();
    }
    async logout() {
        await this.logoutLink.click();
    }

    async resetApp() {
        await this.resetAppLink.click();
    }
}