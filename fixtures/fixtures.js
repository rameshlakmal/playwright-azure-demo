import {test as base} from "@playwright/test";
import CommonAction from "../utils/commonactions"
import EmpCreate from "../pages/empCreatepage";
import LoginPage from "../pages/loginpage";
import { LocatorFile } from "../locators/locators";

export const test = base.extend({
    loginPage: async({page},use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    commonActions: async({page},use) =>{
        const commonActions = new CommonAction(page);
        await use(commonActions);
    },

    empCreate: async({page},use) =>{
        const empCreate = new EmpCreate(page);
        await use(empCreate);
    },



    locators: async({},use) =>{
        const locators = {
            ...LocatorFile.LoginPageLocators,  // Access the locators

        }
        await use(locators);
    },

});

export const expect = base.expect;