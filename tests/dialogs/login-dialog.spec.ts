import { test, expect } from '@playwright/test';
import { Constants } from '../constants';

test.describe("Login dialog tests", () => {

    test.beforeEach("Setup", async ({ page }) => {
        console.log(`Running ${test.info().title}`);
        await page.goto(Constants.URL_HOME);
    });

    test("should be able to sign in successfully with newly created user info", async ({ page }) => {

        // Create a new user
        await page.getByRole("link", { name: "Sign up" }).click();
        await page.getByRole("textbox", { name: "Username:" }).click();
        await page.getByRole("textbox", { name: "Username:" }).fill("newuser");
        await page.getByRole("textbox", { name: "Password:" }).click();
        await page.getByRole("textbox", { name: "Password:" }).fill("password");
        page.once("dialog", dialog => {
            dialog.dismiss();
        });
        await page.getByRole("button", { name: "Sign up" }).click();

        // Wait for a response to the login POST request
        const promise = page.waitForResponse(response =>
            response.url() === Constants.URL_LOGIN && response.request().method() === "POST"
        );
        // NOTE: could mock the POST request to decouple API testing from UI testing but want to keep it end user focused and reduce number of tests

        // Login as new user
        await page.getByRole("link", { name: "Log in" }).click();
        await page.locator("#loginusername").click();
        await page.locator("#loginusername").fill("newuser");
        await page.locator("#loginpassword").click();
        await page.locator("#loginpassword").fill("password");
        await page.getByRole("button", { name: "Log in" }).click();

        // Assert that login POST request was successful
        const response = await promise;
        expect(response.status()).toBe(200);


        // TODO: teardown - delete the newly created user here so that future test runs are not affected
    });


    test("should close login dialog after successful login", async ({ page }) => {
        // etc.
    });


    test("should display username in navigation bar after successful login", async ({ page }) => {
        // etc.
    });


    test("should display Log out button in navigation bar after successful login", async ({ page }) => {
        // etc.
    });

});