import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/");
  await page.getByRole("link", { name: " Sign in" }).click();
  await page.getByPlaceholder("Email").fill("mail");
  await page.getByPlaceholder("Password").fill("pass");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.locator('//a[@href="/editor"]').click();
  await page
    .locator('//input[@data-qa-id="editor-title"]')
    .fill("Реліз оновлення 1.2");
  await page
    .locator('//input[@data-qa-id="editor-description"]')
    .fill("Основні зміни включають виправлення помилок та новий функціонал.");
  await page
    .locator('//textarea"]')
    .fill(
      "## Що нового:\n- Додано підтримку багатомовності.\n- Виправлено помилку з авторизацією.\n\nДякуємо всім за зворотній зв'язок!"
    );
  await page.locator('//input[@data-qa-id="editor-tags"]').fill("реліз");
  await page.keyboard.press("Enter");
  await page.locator('//input[@data-qa-id="editor-tags"]').fill("оновлення");
  await page.keyboard.press("Enter");
  await page.locator('//input[@data-qa-id="editor-tags"]').fill("важливо");
  await page.keyboard.press("Enter");
  await page.locator('//button[@data-qa-id="editor-publish"]').click();

  expect(page.locator('//h1[@data-qa-id="article-title"]')).toBe(
    "Реліз оновлення 1.2"
  );
  expect(page.locator('//h1[@data-qa-id="article-title"]')).toBe(
    "Реліз оновлення 1.2"
  );

});
