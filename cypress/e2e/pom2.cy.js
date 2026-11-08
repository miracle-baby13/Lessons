
import Login from '../pages/Login2';
import HomePage from '../pages/hmepage2';

describe('Login and Logout Tests', () => {

  const loginPage = new Login();
  const homePage = new HomePage();

  it('Test NO1 - Login and Logout with user888', () => {

    // Login sayfasını aç
    loginPage.navigateTo();

    // Login alanlarını kontrol et
    loginPage.checkEmailField();
    loginPage.checkPasswordField();
    loginPage.checkLoginButton();

    // Kullanıcı girişi yap
    loginPage.login('user888@gmail.com', '1234567890');

    // Giriş başarılı mı kontrol et
    loginPage.verifyLogin();

    // Menü butonunu kontrol et
    homePage.checkMenuButton();

    // Logout işlemi yap
    homePage.logout();

    // Login sayfasına dönüldüğünü kontrol et
    homePage.verifyLoginPage();
  });

  it('Test NO2 - Login and Logout with testowyqa', () => {

    // Login sayfasını aç
    loginPage.navigateTo();

    // Login alanlarını kontrol et
    loginPage.checkEmailField();
    loginPage.checkPasswordField();
    loginPage.checkLoginButton();

    // Kullanıcı girişi yap
    loginPage.login('testowyqa@qa.team', 'QA!automation-1');

    // Giriş başarılı mı kontrol et
    loginPage.verifyLogin();

    // Menü butonunu kontrol et
    homePage.checkMenuButton();

    // Logout işlemi yap
    homePage.logout();

    // Login sayfasına dönüldüğünü kontrol et
    homePage.verifyLoginPage();
  });

});
