class HomePage {

  clickMenu() {
    cy.get('button[aria-label="Personal account"]')
      .filter(':visible')
      .first()
      .click();
  }

  clickLogout() {
    cy.get('button[data-slot="profile-menu-item"]')
      .contains('Log out')
      .should('be.visible')
      .click();
  }

  logout() {
    this.clickMenu();
    this.clickLogout();
  }

  verifyLoginPage() {
    cy.url().should('include', '/account/login');
  }
}

export default HomePage;
