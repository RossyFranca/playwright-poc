import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';


test.describe('Login Tests', ()=>{

    test.beforeEach(async ({page})=>{
        const loginpage = new LoginPage(page)
        await loginpage.gotoLoginPage();
    });

    test('login with success @smoke', async ({page})=>{
     
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    
        expect(await page.title()).toBe('Swag Labs');
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    
    });
    
    test('logout', async({page})=>{
    
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click(); 
        
        expect(page.url()).toBe('https://www.saucedemo.com/');
      
    });

    test('Wrong password', async({page})=>{

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('wrong_password');
        await page.locator('[data-test="login-button"]').click();
        const message_error = await page.locator('[data-test="error"]').textContent();

        expect(message_error).toBe("Epic sadface: Username and password do not match any user in this service");

    });
    test.only('Wrong user', async({page})=>{

        await page.locator('[data-test="username"]').fill('wrong_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        const message_error = await page.locator('[data-test="error"]').textContent();

        expect(message_error).toBe("Epic sadface: Username and password do not match any user in this service");

    });
});

