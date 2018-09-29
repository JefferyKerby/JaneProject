module.exports = {
    url: 'https://jane.com/',
    elements: {
        //Login selectors
        Login: 'div[data-testid="nav-log-in"]',
        Email: 'input[type="email"]',
        Password: 'input[type="password"]',
        Login2: {
            selector: '//*[@id="root"]/div/div/div[1]/div/div/div/div/form[2]/button/div/span',
            locateStrategy: 'xpath'
        },

        //Search and add item to cart selectors

        Search: 'input[placeholder="Search..."]',

        Item: 'a[title="Kids Thanksgiving Applique Shirts"]',
        Item2: 'a[title="Apple Watch Silicone Band"]',

        SizeDropDown: 'div[data-testid="dd-opt-0"]',
        ShirtSize: 'option[value="7925621"]',
        ShirtColor: {
            selector: '//*[@id="root"]/div/div/div/div[2]/div/div[2]/div[1]/div/div[2]/form/div[2]/select',
            locateStrategy: 'xpath'
        },
        ShirtDesign: 'option[value="7925624"]',
        Submit: 'button[type="submit"]',
        MyBag: 'div[style="position: relative;"]',
        ShirtTitle: 'span[data-testid="product-title"]',

        //Delete bag


        Edit: {
            selector: '//*[@id="showVariants"]',
            locateStrategy: 'xpath'
        },

        Trash: 'i[class="remove variant-items__RemoveIcon-ehACkt dVRuHi ji ji-trash sc-kAzzGY kpEhwW"]',
        LargeBand: 'option[value="7921694"]',
        AppleSize: 'select[name="Size"]',
        AppleColor: 'select[name="Color"]',
        Purple: 'option[value="7921703"]',
        ShirtTitle: 'span[data-testid="product-title"]',
        NothingInCart: 'span[class="sc-brqgnP jsIcrp"]',
        QuantityValue: 'input[data-testid="qty-input-open"]',
        AppleTitle: 'span[data-testid="dd-title"]',
        AppleClick: 'a[name="Apple Watch Silicone Band"]',


        NavBar: 'i[data-testid="sidenav-btn"]',
        SellBtn: 'a[data-testid="sell-with-jane"]',

        BecomeSellerBtn: {
            selector: '(//button[@class="button__ButtonContent-tmWEX hEgEaw"])[2]',
            locateStrategy: 'xpath'
        },

        Company: 'input[name="companyName"]',
        BusType: 'select[name="businessType"]',
        Sole: 'option[value="Individual/Sole Proprietor"]',
        Ssn: 'input[type="ssn"]',
        BusCat: 'select[name="businessCatergory"]',
        Craft: 'option[value="Craft"]',
        Years: 'select[name="yearsActive"]',
        YearsInput: 'option[value="less-than-3-years"]',
        Website: 'input[name="website"]',
        SignUpEmail: 'input[name="email"]',
        Name: 'input[name="fullName"]',
        Add: 'input[name="address"]',
        City: 'input[name="city"]',
        StateSelect: 'select[name="state"]',
        State: 'option[value="UT"]',
        Zip: 'input[name="zip"]',
        Phone: 'input[name="companyPhone"]',
        SignUpBtn: 'button[id="signUpBtn"]',
        ErrorIcon: 'div[class="icon error animateErrorIcon"]'










    },

















}