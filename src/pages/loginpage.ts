import { Page } from '@playwright/test';

class LoginPage {
    page: Page;
   readonly username_textbox:string = '[data-test="username"]';
   readonly password_textbox:string = '[data-test="password"]';
   readonly login_submit_btn:string = '[data-test="login-button"]';


    constructor(page:Page){
       this.page = page;
    
    }


async gotoLoginPage(){
    await this.page.goo('https://www.saucedemo.com/');
}
async login(user: object = {}){

    const defaultUser: object = {
        username: 'standard_user',
        password: 'secret_sauce'
    }
        var userToLogin:any = Object.assign({}, defaultUser, user )

    await this.page.locator(this.username_textbox).fill(userToLogin.username);
    await this.page.locator(this.password_textbox).fill(userToLogin.password);
    await this.page.locator(this.login_submit_btn).click();
}


}

export { LoginPage };
