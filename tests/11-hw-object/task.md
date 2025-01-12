Зробити рефакторинг функцій і змінних і перетворити їх методи обʼєктів



function CoffeeCartApp(page: Page) {
  this.page = page;
  this.espressoCupLocator = page.locator('[data-test="Espresso"]');
  this.checkoutButtonLocator = this.page.locator('[data-test="checkout"]');
  this.nameInputLocator = this.page.locator('input[ id="name"]');

  this.clickOnEspresso = async function () {
    await this.espressoCupLocator.click();
  };
  this.clickOnCheckout = async function () {
    await this.checkoutButtonLocator.click();
  };
  this.fillName = async function (name: string) {
    await this.nameInputLocator.fill(name);
  };
  this.fillEmail = async function (email: string) {
    await this.page.locator('input[ id="email"]').fill(email);
  };
  this.submitPayment = async function () {
    await this.page.locator('button[id="submit-payment"]').click();
  };
}

test("should be able to order coffee111", async ({ page }) => {
  const pageObject = createPageObject(page);

  const app = new CoffeeCartApp(page);

  await page.goto("https://coffee-cart.app");
  await app.clickOnEspresso();
  await app.clickOnCheckout();
  await app.fillName("SomeName");
  await app.fillEmail("fasfa@masfas.com");
  await app.submitPayment();
});

test("should be able to order coffee", async ({ page }) => {
  const pageObject = createPageObject(page);

  await pageObject.clickOnEspresso();

  await page.goto("https://coffee-cart.app");
  await expect(page.getByRole("heading", { name: "Espresso $" })).toBeVisible(); // preferable

  const header = page
    .locator('[data-test="Espresso"]')
    .locator("//ancestor::li")
    .locator("h4");

  await expect(header).toContainText("Espresso"); // ok

  await expect(page.getByRole("heading", { name: "Espresso $" })).toBeVisible(); // ok
  await expect(page.getByText("Espresso $")).toBeVisible(); // could be better
  await expect(
    page.locator("//h4[contains(text(), 'Espresso')]").first()
  ).toBeVisible(); // could be better

  await page.locator(".list-item").locator("div", { hasText: "Mocha" });

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('input[ id="name"]').fill("Ivanna");
  await page.locator('input[ id="email"]').fill("test@gmail.com");
  await page.locator('input[ type="checkbox"]').check();
  await page.locator('button[id="submit-payment"]').click();
  await expect(page.locator('[id="app"]')).toContainText(
    "Thanks for your purchase. Please check your email for payment."
  );
});