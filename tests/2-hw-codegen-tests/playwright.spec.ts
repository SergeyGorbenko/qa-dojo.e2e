import { test, expect } from "@playwright/test";

test("Verify page title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  
  await expect(page).toHaveTitle(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});

test("Check main banner have text", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page.locator("h1")).toContainText(
    "Playwright enables reliable end-to-end testing for modern web apps."
  );
});

test("Check switch dark and light mode", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.getByTitle("Switch between dark and light mode").click();
  const button = page.locator('button[aria-label^="Switch between dark and light mode"]');
  const title = await button.getAttribute('title');

  expect(title).toBe('Switch between dark and light mode (currently dark mode)');
});

test("Verify search functionality displays correct results and successful go to first search result", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");

  await page.getByLabel("Search").click();
  await page.getByPlaceholder("Search docs").fill("install");

  await expect(page.locator("#docsearch-item-0")).toContainText("Installation");

  await page.getByPlaceholder("Search docs").press("Enter");

  await expect(page.locator("h1")).toContainText("Installation");
});

test("Test navigation to home page use logo", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/codegen-intro");

  await page.getByRole("link", { name: "Playwright logo Playwright" }).click();

  await expect(page).toHaveURL("https://playwright.dev/");
});

test("Verify Code Block Visibility", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/codegen-intro");

  const codeBlock = page.locator(".language-javascript");

  await expect(codeBlock).toBeVisible();
});

test("Check copy code to clipboard", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);

  await page.goto("https://playwright.dev/docs/codegen-intro");

  await page.getByLabel("Copy code to clipboard").click();
  const clipboardContent = await page.evaluate(async () => {
    return navigator.clipboard.readText();
  });

  expect(clipboardContent).toBe(
    "npx playwright codegen demo.playwright.dev/todomvc"
  );
});
