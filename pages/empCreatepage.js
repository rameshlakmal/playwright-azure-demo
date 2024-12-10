import CommonAction from "../utils/commonactions";
import { LocatorFile } from "../locators/locators";

export default class EmpCreate {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LoginPageLocators;
    }
    

    async Navigate_to_CreatePage(){
        await this.actions.click(this.locators.CLICK_PIM)
        await this.actions.click(this.locators.CLICK_ADD_BTN)

    }

    async Create_Employee(firstname, lastname){
        await this.actions.fill(this.locators.ENTER_FIRSTNAME, firstname)
        await this.actions.fill(this.locators.ENTER_LASTNAME, lastname)
        await this.actions.getText(this.locators.GET_EMP_ID)
        await this.actions.click(this.locators.CLICK_SUBMIT_EMP)
    }
}
