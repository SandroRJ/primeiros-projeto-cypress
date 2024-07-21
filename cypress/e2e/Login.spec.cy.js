import userData from '../fixtures/users/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/dashboardPage.js'
import MenuPage from '../Pages/menuPage.js'
import myInfoPage from '../Pages/myInfoPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new myInfoPage

describe('Login Orange HRM Tests', () => {

  
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
    
  })
    
  it('Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    
  })
})