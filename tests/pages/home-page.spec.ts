import { test, expect } from '@playwright/test';

test.describe("Home page tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto('https://www.demoblaze.com/index.html');
    });

    test('should navigate to product page when card title is clicked', async ({ page }) => {
        await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
        expect(page.url()).toBe("https://www.demoblaze.com/prod.html?idp_=1");
        await expect(page.getByRole('heading', { name: 'Samsung galaxy s6' })).toBeVisible();
    });

});