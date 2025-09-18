describe('Lab 1: Wikipedia History Navigation & Viewport Test', () => {
  it('should navigate through history and test mobile viewport', () => {
    
    cy.visit('https://www.wikipedia.org/')

    cy.get('#js-link-box-en').should('be.visible').click()

    cy.origin('https://en.wikipedia.org', () => {
      
      cy.get('#mp-tfa').should('be.visible')

     
      cy.get('#mp-tfa a')
        .filter((_, el) => {
          const text = el.textContent.trim()
          return text.includes('Gateshead') || text.includes('Stadium') || text.length > 10
        })
        .first()
        .click()

      
      cy.go('back')
      cy.url().should('include', 'Main_Page')
      
      cy.viewport('iphone-x')

      cy.go('forward')

      cy.wait(500)

      cy.get('#firstHeading').should('be.visible')
    })
  })
})