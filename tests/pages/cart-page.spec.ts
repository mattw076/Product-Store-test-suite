import { test, expect } from '@playwright/test';
import { Constants } from '../constants';

test.describe("Cart page tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto(Constants.URL_HOME);
    });

    // TODO
});