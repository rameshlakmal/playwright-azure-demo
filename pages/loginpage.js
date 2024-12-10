import CommonAction from "../utils/commonactions";
import { LocatorFile } from "../locators/locators";

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LoginPageLocators;
    }
    

    async loginPage(){
        await this.actions.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // await this.actions.click(this.locators.LOGIN_PAGE_LINK)
    }

    async Enter_Credentials_and_Click_Login_BTn(email, password){
        await this.actions.fill(this.locators.ENTER_USERNAME, email)
        await this.actions.fill(this.locators.ENTER_PASSWORD, password)
        await this.actions.click(this.locators.CLICK_LOGIN_BTN)
    }
}
