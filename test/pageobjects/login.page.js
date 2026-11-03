import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@placeholder="Username"]');
    }

    get inputPassword () {
        return $('//input[@placeholder="Password"]');
    }

    get btnSubmit () {
        return $('//input[@data-test="login-button"]');
    }

    get hamMenu () {
        return $('//button[@id="react-burger-menu-btn"]')
    }

    get exit () {
        return $('//a[@id="logout_sidebar_link"]')
    } 

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    credentials = {users: 
        ["standard_user", "problem_user", "error_user", "visual_user"],
        password: "secret_sauce"  
    }
    
    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logout () {
        await this.hamMenu.click()
        await this.exit.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
