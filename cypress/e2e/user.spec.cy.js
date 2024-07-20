import userData from '../fixtures/users/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/dashboardPage.js'
import MenuPage from '../Pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
   
    
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
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

  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()  
        
    cy.get(selectorsList.firstNameField).clear().type('Maria')
    cy.get(selectorsList.middleName).clear().type('Delmaria')
    cy.get(selectorsList.lastNameField).clear().type('Azevedo')
    cy.get(selectorsList.genericField).eq(4).clear().type('789654')
    cy.get(selectorsList.genericField).eq(5).clear().type('123456')
    cy.get(selectorsList.genericField).eq(6).clear().type('254255')
    cy.get(selectorsList.dateField).eq(0).clear().type('1982-06-07')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.comboBox).eq(0).click()
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.comboBox).eq(1).click()
    cy.get(selectorsList.thirdItemComboBox).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('2011-04-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get('.oxd-radio-wrapper').eq(1).click()


    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')




  })
  it('User Info Update - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type (userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})