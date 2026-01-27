import { test, expect } from '@playwright/test';

test.describe("Login and signup dialog tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto('https://www.demoblaze.com/index.html');
    });

    // TODO
});