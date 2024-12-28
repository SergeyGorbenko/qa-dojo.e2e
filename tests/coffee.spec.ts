import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cafe_Breve"]').click();
  await page.locator('input[placeholder="Username"]').click();
  await page.locator('input[placeholder="Email"]').click();
  await page.locator('input[placeholder="Password"]').click();
  await page.locator('button.btn-primary').click();
});
