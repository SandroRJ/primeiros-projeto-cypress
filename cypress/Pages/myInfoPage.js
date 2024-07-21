class myInfoPage {

   selectorsList() {
        const selectors = {
            firstNameField:"[name='firstName']",
            middleName:"[name='middleName']",
            lastNameField:"[name='lastName']",
            genericField: ".oxd-input",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            comboBox:"[tabindex='0']",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(2)"
            

        }
        return selectors
    }

    fillPersonalDetails(fistName,middleName,lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(fistName)
        cy.get(this.selectorsList().middleName).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployerDetails(employeeID,otherID,driverLicenceNumber,driverLicenceDate){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherID)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenceNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driverLicenceDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(1).click({ force: true })
        cy.get('body')
        cy.get('.oxd-toast-close')
    }
    fillStatus(){
        cy.get(this.selectorsList().comboBox).eq(0).click()
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().comboBox).eq(1).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('2011-04-12')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get('.oxd-radio-wrapper').eq(1).click()
    }
}

export default myInfoPage
