import { test, expect } from '@playwright/test';
import { Constants } from '../constants';

test.describe("Accessibility tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto(Constants.URL_HOME);
    });
    
    test("should contain alt text for product image", async ({ page }) => {
        await page.goto(Constants.URL_PRODUCT_1);
        expect (await page.locator("div#imgp img").getAttribute("alt")).toContain("Image of Samsung galaxy s6");
        // NOTE: ideally would use getByRole rather than locator("css-selector"), recommend setting aria-label attribute in HTML for improved accessibility
    });

});