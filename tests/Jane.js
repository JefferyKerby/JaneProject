module.exports = {
    beforeEach: browser => {
        browser.url('https://jane.com/')
    },
    after: browser => {
        browser.end()
    },

    // 'Test for valid login': browser => {

    //     browser
    //         // .useXpath()
    //         // .click('//*[@id="top-bar"]/div[3]/div[1]/div')
    //         // .setValue('//*[@id="email"]/input', 'jefferykerby88@gmail.com')
    //         // .setValue('//*[@id="password"]/input', 'Pringles.1')
    //         // .click('//*[@id="root"]/div/div/div[1]/div/div/div/div/form[2]/button/div/span')

    //         //.click('(//span[@class="menu-item__Item-fBSUcB cUnpoZ"])[text()="Men"][2]')
    //         //.click('(//img[@class="deal-image__Img-cWoqkn huItbg"])[1]')
    //         //.click('(//span[@class="button__ButtonText-duhxP kuTJbD text__Text-hHAknR dkCkmo"])[3]')
    //         .useCss()
    //     browser.pause(5000).expect.element('body').to.be.present
    // },
    'Test for valid Search': browser => {

        browser

            .setValue('input[placeholder="Search..."]', 'Shirt' + browser.Keys.ENTER)
            .useXpath()
            .click('(//span[contains(text(), "Plaid Shirts")])[1]')
            .useCss()

        browser.pause(5000).expect.element('body').to.be.present
    },


}
