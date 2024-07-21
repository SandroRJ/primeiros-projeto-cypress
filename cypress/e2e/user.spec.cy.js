import userData from '../fixtures/users/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/dashboardPage.js'
import MenuPage from '../Pages/menuPage.js'
import myInfoPage from '../Pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new myInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()  

    myInfo.fillPersonalDetails(chance.first(), chance.name(), chance.last())
    myInfo.fillEmployerDetails('451Teste','74584Teste','8965475teste','2024-07-20')
    myInfo.fillStatus()
    myInfo.saveForm()

        
    })
  
   
    
  })
