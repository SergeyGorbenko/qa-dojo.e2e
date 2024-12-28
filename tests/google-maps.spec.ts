import { test, expect } from "@playwright/test";

test("Search by city", async ({ page }) => {
  await page.goto("https://www.google.com/maps");

  const searchInput = page.locator(".searchboxinput");
  await searchInput.fill("Київ");
  await searchInput.press("Enter");

  await expect(page.locator("h1")).toContainText("Київ");
});

test("Switch to Satellite View", async ({ page }) => {
  await page.goto("https://www.google.com/maps");

  await page.getByLabel("Шари").click();
  const miniMapElement = page.locator("#minimap");

  await expect(miniMapElement.locator("text=Карта")).toBeVisible();
});

test("Get Directions between two locations", async ({ page }) => {
  await page.goto("https://www.google.com/maps");

  await page.getByLabel("Маршрути").click();
  await page.getByPlaceholder("Виберіть початкову точку чи натисніть на карту…").fill("Київ");
  await page.keyboard.press("Enter");
  await page.getByPlaceholder("Виберіть місце призначення чи натисніть на карту").fill("Львів");
  await page.keyboard.press("Enter");

  await expect(page.locator("#section-directions-trip-0")).toBeVisible();
});

test("Verify My Location functionality", async ({ page, context }) => {
  await context.grantPermissions(["geolocation"]);
  await context.setGeolocation({ latitude: 50.4501, longitude: 30.5234 });

  await page.goto("https://www.google.com/maps/@47.9074604,33.3596312,11z");

  await page.locator("#mylocation").click();

  await page.waitForURL('**/@50.4501,30.5234*');
});
