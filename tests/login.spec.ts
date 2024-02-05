import { test, expect } from '@playwright/test';


test('The user login with success', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    expect(await page.title()).toBe('Swag Labs');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');

});