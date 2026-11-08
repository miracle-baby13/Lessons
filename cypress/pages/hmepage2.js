

class HomePage {

  constructor() {
    this.menuButton = 'button[aria-label="Personal account"]';
    this.logoutButton = 'button[data-slot="profile-menu-item"]';
  }

  // Menü butonunu kontrol etme
  checkMenuButton() {
    cy.get(this.menuButton)
      .filter(':visible')
      .first()
      .should('be.visible')
      .and('exist');
  }

  // Logout butonunu kontrol etme
  checkLogoutButton() {
    cy.contains('Log out')
      .should('be.visible')
      .and('exist');
  }

  // Menüye tıklama
  clickMenu() {
    cy.get(this.menuButton)
      .filter(':visible')
      .first()
      .click();
  }

  // Logout butonuna tıklama
  clickLogout() {
    cy.contains('Log out')
      .should('be.visible')
      .click();
  }

  // Logout işlemi
  logout() {
    this.clickMenu();
    this.clickLogout();
  }

  // Login sayfasına yönlendirildiğini kontrol etme
  verifyLoginPage() {
    cy.url().should('include', '/account/login');
  }
}

export default HomePage;
