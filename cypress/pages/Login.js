class Login {

  visit() {
    cy.visit('https://www.edu.goit.global/account/login');
  }

  enterEmail(email) {
    cy.get('input[type="email"]').type(email);
  }

  enterPassword(password) {
    cy.get('input[type="password"]').type(password);
  }

  clickLogin() {
    cy.contains('button', 'Log in').click();
  }

  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }

verifyLogin() {
    cy.url().should('not.include', '/account/login');
  }
}


export default Login;