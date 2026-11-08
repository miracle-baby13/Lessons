
class Login {

  constructor() {
    // Sayfa elementlerinin selector değerleri
    this.title = '.next-10stgr7 > .next-c1v7jd';
    this.email = '#user_email';
    this.password = 'input[type="password"]';
    this.loginButton = 'button[type="submit"]';
    this.forgotPassword = 'a';
  }

  // Login sayfasına gitme
  navigateTo() {
    cy.visit('https://www.edu.goit.global/account/login');
  }

  // İstenilen URL'ye gitme
  navigateUrl(url) {
    cy.visit(url);
  }

  // Sayfa başlığını kontrol etme
  checkTitle(title) {
    cy.get(this.title)
      .should('be.visible')
      .and('have.text', title);
  }

  // Email alanını kontrol etme
  checkEmailField() {
    cy.get(this.email)
      .should('be.visible')
      .and('exist');
  }

  // Password alanını kontrol etme
  checkPasswordField() {
    cy.get(this.password)
      .should('be.visible')
      .and('exist');
  }

  // Login butonunu kontrol etme
  checkLoginButton() {
    cy.get(this.loginButton)
      .should('be.visible')
      .and('exist');
  }

  // Forgot password alanını kontrol etme
  forgetPassword(text) {
    cy.contains(this.forgotPassword, text)
      .should('be.visible');
  }

  // Email girme
  enterEmail(email) {
    cy.get(this.email).type(email);
  }

  // Password girme
  enterPassword(password) {
    cy.get(this.password).type(password);
  }

  // Login butonuna tıklama
  clickLogin() {
    cy.get(this.loginButton).click();
  }

  // Login işlemi
  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }

  // Login kontrolü
  verifyLogin() {
    cy.url().should('not.include', '/account/login');
  }
}

export default Login;
