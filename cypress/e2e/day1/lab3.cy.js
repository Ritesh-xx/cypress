describe('Lab 3: GitHub Navigation Flow', () => {
  it('should search for cypress, navigate to repo, and use browser history', () => {

    cy.visit('https://github.com')

    cy.get('.js-nav-padding-recalculate .Button-label').click()
    cy.get('span.flex-1').click()


    cy.get('[name="query-builder-test"]').type('cypress{enter}')

    cy.get('h3 a').first().click()

    cy.url().should('include', '/cypress')
    cy.get('h1').should('be.visible')
    cy.contains('About').should('be.visible')

    cy.go('back')

    cy.url().should('include', 'search?q=cypress')
    cy.get('h3 a').should('have.length.greaterThan', 1)


    cy.go('forward')
    cy.get('h1').should('be.visible')
    cy.contains('About').should('be.visible')

    cy.log('✅ Test completed successfully')

  })
})