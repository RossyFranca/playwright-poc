import {expect, test} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test.describe('Inventory Tests', ()=>{
  
    test.beforeEach(async ({page})=>{
        const loginpage = new LoginPage(page)
        await loginpage.gotoLoginPage();
        await loginpage.login();
    
    })

    test('select products from inventory @inventory', async ({page})=>{

        console.log('De fAlha')

    });

});
