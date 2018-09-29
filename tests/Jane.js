var jane = {}

module.exports = {
    beforeEach: browser => {
        jane = browser.page.PageObject()
        jane.navigate()
        // browser.url('https://jane.com/')
    },
    after: browser => {
        browser.end()
    },

    // 'Test for valid login': browser => {
    //     // jane
    //     //     .click('@Login')
    //     jane

    //         .click('@Login')
    //         .setValue('@Email', 'jefferykerby88@gmail.com')
    //         .setValue('@Password', 'Pringles.1')
    //         .click('@Login2')
    //         .api.pause(5000)
    //     jane
    //         .expect.element('body').to.be.present


    // },
    'Test to search for a shirt and add to bag': browser => {

        jane
            .api.pause(1000)
        jane
            .setValue('@Search', 'Shirt' + browser.Keys.ENTER)
            .waitForElementVisible('@Item', 5000)
            .click('@Item')

            .waitForElementVisible('@SizeDropDown', 5000)
            .click('@SizeDropDown')
            .click('@ShirtSize')

            .click('@ShirtColor')
            .api.pause(500)
        jane
            .click('@ShirtDesign')
            .waitForElementVisible('@Submit', 5000)
            .click('@Submit').api.pause(1000)
        jane
            .click('@MyBag')
            .expect.element('@ShirtTitle').text.to.contain("Kids Thanksgiving Applique Shirts").after(5000)



        jane.api.pause(5000).expect.element('body').to.be.present
    },
    'Test to delete item from bag': browser => {

        jane
            .click('@MyBag')
            .waitForElementPresent('@Edit', 5000)
            .click('@Edit')
            .click('@Trash')
            .waitForElementVisible('@NothingInCart', 5000)

    },

    'Test to edit item in bag': browser => {

        jane
            .api.pause(1000)
        jane
            .setValue('@Search', 'Apple' + browser.Keys.ENTER)
            .waitForElementVisible('@Item2', 5000)
            .click('@AppleClick')
            .waitForElementVisible('@AppleTitle', 5000)
            .click('@AppleSize')
            .click('@LargeBand')
            .click('@AppleColor')
            .api.pause(500)
        jane
            .click('@Purple')
            .waitForElementVisible('@Submit', 5000)
            .click('@Submit').api.pause(1000)
        jane
            .click('@MyBag')
            .expect.element('@ShirtTitle').text.to.contain("Apple Watch Silicone Band").after(5000)
        jane
            .click('@Edit')
            .clearValue('@QuantityValue')
            .setValue('@QuantityValue', '2' + browser.Keys.ENTER)
            .expect.element('@QuantityValue').value.to.contain("2").after(5000)

    },

    'Test for becoming a seller': browser => {
        jane

            .click('@NavBar')
            .click('@SellBtn')
            .click('@BecomeSellerBtn')
            .setValue('@Company', "LIL'beaus")
            .click('@BusType')
            .click('@Sole')
            .setValue('@Ssn', "111111111")
            .click('@BusCat')
            .click('@Craft')
            .click('@Years')
            .click('@YearsInput')
            .setValue('@Website', "Andrewd.com")
            .setValue('@SignUpEmail', "Thisisautomation@jane.com")
            .setValue('@Name', "Charley Mcdermut")
            .setValue('@Add', "234 fake street")
            .setValue('@City', "Lehi")
            .click('@StateSelect')
            .click('@State')
            .setValue('@Zip', "84333")
            .setValue('@Phone', "8014328834")
            .click('@SignUpBtn')
            .expect.element('@ErrorIcon').to.be.visible













    }

}
