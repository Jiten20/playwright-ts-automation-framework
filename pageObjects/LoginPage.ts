import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly errorMsg: Locator;
  constructor(page: Page) {
    this.page = page;

    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.errorMsg = page.getByTestId('error')
  }
  async navigate() {
    await this.page.goto('/');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async verifyError() {
    await expect(this.errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  }

  async verifyErrorMessage(expectedMessage: string) {
    await expect(this.errorMsg).toHaveText(expectedMessage);
  }

  async verifyLoginSuccess(){
    await expect(this.page).toHaveURL('/inventory\.html');
  }
}