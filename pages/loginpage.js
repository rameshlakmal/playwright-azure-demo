import { expect } from "@playwright/test";
import CommonAction from "../utils/commonactions";
import { LocatorFile } from "../locators/locators";

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LoginPageLocators;
    }
    

    async loginPage(){
        await this.actions.navigate('https://staging.analystbuilder.com')
        // await this.actions.click(this.locators.LOGIN_PAGE_LINK)
    }

    async Enter_Credentials_and_Click_Login_BTn(email, password){
        await this.actions.fill(this.locators.ENTER_EMAIL, email)
        await this.actions.fill(this.locators.ENTER_PASSWORD, password)
        await this.actions.click(this.locators.CLICK_LOGIN_BTN)
    }

    async getErrorMessage(xpath){
        return await this.actions.getText(xpath)
    }

    async assertErrorMessage(xpath,expectedMessage){
        const actualMessage = await this.getErrorMessage(xpath)
        expect(actualMessage).toContain(expectedMessage)
    }

    async getURL(){
        return await this.actions.getCurrentUrl()
    }

    async assertCurrentURL(verifyURL){
        const currentURL = await this.getURL()
        expect(currentURL).toContain(verifyURL)
    }

}
