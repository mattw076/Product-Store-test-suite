import { test, expect } from '@playwright/test';

test.describe("Accessibility tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto('https://www.demoblaze.com/index.html');
    });

    // TODO
});