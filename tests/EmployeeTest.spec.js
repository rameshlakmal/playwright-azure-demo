import { assert } from "console";
import {test,expect} from "../fixtures/fixtures.js"





test.describe('Employee function test cases' , () => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.loginPage();
    })

        test('Create employee', async ({empCreate,page}) => {
                
            await empCreate.Navigate_to_CreatePage()
            await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
            await empCreate.Create_Employee("Jehan","Perera")        
        });
})
