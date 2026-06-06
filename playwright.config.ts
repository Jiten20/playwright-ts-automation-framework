import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],
    ['html']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    headless: true
  }
});