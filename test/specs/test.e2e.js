import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        for (let i = 0; i < LoginPage.credentials.users.length; i++) {
            await LoginPage.open()
            await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password)
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('Products'))
            await LoginPage.logout()
            await expect(LoginPage.inputUsername).toBeExisting()

        }

        
    })
})

