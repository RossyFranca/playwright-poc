import { test, expect } from '@playwright/test';


test.describe('Login Tests', ()=>{
    test('login with success', async ({page})=>{

        await page.goto('https://www.saucedemo.com/');
    
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    
        expect(await page.title()).toBe('Swag Labs');
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    
    });
    
    test('logout', async({page})=>{
    
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    
        
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click(); 
        
        expect(page.url()).toBe('https://www.sauced');
      
    });
});

