describe('Lab 4: The Internet - Login Form Validation', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('should verify form elements exist and are visible', () => {
    
    cy.get('#username').should('exist').and('be.visible')
    cy.get('#password').should('exist').and('be.visible')
    cy.get('[type="submit"]').should('exist').and('be.visible')
  })

  it('should show error message for invalid login', () => {
    
    cy.get('#username').type('invalidUser')
    cy.get('#password').type('invalidPass!')
    cy.get('[type="submit"]').click()

    
    cy.get('#flash')
      .should('exist')
      .and('be.visible')
      .and('include.text', 'Your username is invalid!')
  })

  it('should show success message for valid login', () => {
    
    cy.get('#username').clear().type('tomsmith')
    cy.get('#password').clear().type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()

    
    cy.get('#flash')
      .should('exist')
      .and('be.visible')
      .and('include.text', 'You logged into a secure area!')
  })
})