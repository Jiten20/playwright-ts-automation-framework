import { Locator, Page, expect } from "@playwright/test";
export class CheckoutPage {

    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator
    readonly postalCode: Locator;
    readonly continueBtn: Locator
    readonly finishBtn: Locator;
    readonly checkoutCompleteMsg: Locator;
    constructor(page: Page) {
        this.page = page;
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postalCode = page.getByPlaceholder('Postal Code');
        this.continueBtn = page.getByRole('button', { name: 'Continue' });
        this.finishBtn = page.getByRole('button', { name: 'Finish' });
        this.checkoutCompleteMsg = page.locator('.complete-header');
    }

    async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async clickContinue() {
        await this.continueBtn.click();
    }

    async clickFinish() {
        await this.finishBtn.click();
    }

    async getSuccessMessage() {
        return this.checkoutCompleteMsg;
    }
}