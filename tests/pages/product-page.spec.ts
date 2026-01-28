import { test, expect } from '@playwright/test';
import { Constants } from '../constants';

test.describe("Product page tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto(Constants.URL_PRODUCT_1);
    });

    test("should navigate to product page when card title is clicked", async ({ page }) => {
        await page.getByRole("link", { name: "Samsung galaxy s6" }).click();
        await expect(page.getByRole("heading", { name: "Samsung galaxy s6" })).toBeVisible();
    });


    test("should add product to cart when Add to cart button is clicked", async ({ page }) => {
        page.once("dialog", dialog => {
            expect(dialog.message()).toBe("Product added");
            dialog.accept();
        });
        await page.getByRole("link", { name: "Add to cart" }).click();
        await page.getByRole("link", { name: "Cart", exact: true }).click();
        await expect(page.getByRole("cell", { name: "Samsung galaxy s6" })).toBeVisible();
        // Delete the product from cart so doesn"t affect other tests
        await page.getByRole("link", { name: "Delete" }).first().click();
        // TODO: test failing
    });
});