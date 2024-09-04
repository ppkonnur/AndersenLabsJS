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
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputEmail(){
        return $('//input[@id="email"]')
    }

    get btnSubmit () {
        return $('#register-submit');
    }

    get errorMessage() {
        return $('//div[@class="message danger"]')
    }

    get loginLink(){
        return $('//a[@href="/login"]')
    }

    get loginButton(){
        return $('//button[normalize-space()="Login"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async createAccount (username, email, password) {
        await this.inputUsername.setValue(username);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async login (username, password) {
        await this.loginLink.scrollIntoView()
        await this.loginLink.click()
        await this.inputUsername.setValue(username);      
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('register');
    }
}

export default new LoginPage();
