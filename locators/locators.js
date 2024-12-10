export class LocatorFile {
    static get LoginPageLocators() {
      return {
        LOGIN_PAGE_LINK : '//*[@id="__next"]/main/div/div[2]/header/div[2]/div[3]/a[1]',
        ENTER_USERNAME : "//input[@placeholder='Username']",
        ENTER_PASSWORD: "//input[@placeholder='Password']",
        CLICK_LOGIN_BTN: "//button[normalize-space()='Login']",
        CLICK_PIM: '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a',
        CLICK_ADD_BTN: "//button[normalize-space()='Add']",
        ENTER_FIRSTNAME: "//input[@placeholder='First Name']",
        ENTER_LASTNAME: "//input[@placeholder='Last Name']",
        CLICK_SUBMIT_EMP: "//button[@type='submit']",
        GET_EMP_ID: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input',

    };
  }


}