describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type ('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type ('Teste')
    cy.get(selectorsList.passwordField).type('teste')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})