import { test, expect } from '@playwright/test';
import { Constants } from '../constants';

test.describe("Home page tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto(Constants.URL_HOME);
    });

    test("should navigate to product page when card title is clicked", async ({ page }) => {
        await page.getByRole("link", { name: "Samsung galaxy s6" }).click();
        expect(page.url()).toBe(Constants.URL_PRODUCT_1);
        await expect(page.getByRole("heading", { name: "Samsung galaxy s6" })).toBeVisible();
    });

});