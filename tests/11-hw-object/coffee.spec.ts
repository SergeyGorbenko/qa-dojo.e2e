import { test, expect, Page } from "@playwright/test";

function CheckoutPage(page: Page) {
  this.page = page;
  this.nameInputLocator = this.page.locator('input[id="name"]');
  this.emailInputLocator = this.page.locator('input[id="email"]');
  this.submitLocator = this.page.locator('button[id="submit-payment"]');

  this.fillName = async function (name: string) {
    await this.nameInputLocator.fill(name);
  };

  this.fillEmail = async function (email: string) {
    await this.emailInputLocator.fill(email);
  };

  this.submitPayment = async function () {
    await this.submitLocator.click();
  };
}

function CoffeeCartMenuPage(page: Page) {
  this.page = page;
  this.cupLocator = (name: string) => this.page.locator(`[data-test="${name}"]`);
  this.checkoutButtonLocator = this.page.locator('[data-test="checkout"]');

  this.clickOnCoffeeCupByName = async function (name: string) {
    await this.cupLocator(name).click();
  };
  this.clickOnCheckout = async function () {
    await this.checkoutButtonLocator.click();
    return new CheckoutPage(this.page);
  };
}
test("CC-001 should be able to order coffee", async ({ page }) => {
  const coffeeCartMenu = new CoffeeCartMenuPage(page);
  
  await page.goto("https://coffee-cart.app/");

  await coffeeCartMenu.clickOnCoffeeCupByName("Espresso");

  const checkoutPage = await coffeeCartMenu.clickOnCheckout();  
  await checkoutPage.fillName("username");
  await checkoutPage.fillEmail("usermail@mail.com");
  await checkoutPage.submitPayment();
});
