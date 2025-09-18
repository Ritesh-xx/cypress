describe('SauceDemo Login Tests - Data Driven', () => {
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  it('should login with standard_user successfully', () => {
    const user = users.standard_user;
    cy.login(user.username, user.password);
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('should show error for locked_out_user', () => {
    const user = users.locked_out_user;
    cy.login(user.username, user.password);
    cy.get('[data-test="error"]').should('contain.text', 'locked out');
  });
});
