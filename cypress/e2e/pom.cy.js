import Login from '../pages/Login';
import HomePage from '../pages/hmepage';

describe('Login and Logout Tests', () => {

  const loginPage = new Login();
  const homePage = new HomePage();

  it('Test NO1 - Login and Logout with user888', () => {
  loginPage.visit();
  loginPage.login('user888@gmail.com', '1234567890');

  loginPage.verifyLogin();

  homePage.logout();
  homePage.verifyLoginPage();
});

  it('Test NO2 - Login and Logout with testowyqa', () => {
    loginPage.visit();
    loginPage.login('testowyqa@qa.team', 'QA!automation-1');

    homePage.logout();
    homePage.verifyLoginPage();
  });

});