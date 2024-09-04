import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/vikunja.home.js'
import loginData from '../testData/login.json'

describe('My Login application', () => {

    beforeEach('Open webpage', async () =>{
        await LoginPage.open()
    })

    it('Create Account', async () => {        
        await LoginPage.createAccount(loginData.CreateAcount.username, loginData.CreateAcount.email, loginData.CreateAcount.password)
        await expect(HomePage.loggedInUser).toBeExisting()
        await expect(HomePage.loggedInUser).toHaveText(
            expect.stringContaining(loginData.CreateAcount.username))        
    })

    it('Invalid User Name', async () => {        
        await LoginPage.createAccount(loginData.InvalidAccount.username, loginData.InvalidAccount.email, loginData.InvalidAccount.password)
        await expect(LoginPage.errorMessage).toBeExisting()
        await expect(HomePage.errorMessage).toHaveText(
            expect.stringContaining(loginData.InvalidAccount.ErrMessage))        
    })

    it('Login', async () => {        
        await LoginPage.login(loginData.Login.username, loginData.Login.password)
        await expect(HomePage.loggedInUser).toBeExisting()
        await expect(HomePage.loggedInUser).toHaveText(
            expect.stringContaining(loginData.Login.username))        
    })

    afterEach('close webpage', async () =>{
        //await LoginPage.close()
    })
})

