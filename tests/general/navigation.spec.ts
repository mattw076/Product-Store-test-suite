import { test, expect } from '@playwright/test';
import { Constants } from '../constants';

test.describe("Navigation tests", () => {

  test.beforeEach("Setup", async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto(Constants.URL_HOME);
});

  test("should navigate to cart page when cart button is clicked", async ({ page }) => {
    // Note: prefer getByRole to simple locator("css-selector") since matches better with user experience and screen reader behaviour
    await page.getByRole("link", { name: "Cart", exact: true }).click();
    expect(page.url()).toBe("https://www.demoblaze.com/cart.html");
  });
  
  test.skip("should navigate to home page when logo is clicked", async ({ page }) => {
    // etc.
  });
  
});
