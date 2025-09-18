describe('Lab 2: Quote Scraper Reload Test', () => {
  it('should reload page and verify title remains the same', () => {

    cy.visit('https://quotes.toscrape.com/')

    cy.get('.quote:first-child .text')
      .invoke('text')
      .then((firstQuoteText) => {
        
        cy.reload()

        cy.get('.quote:first-child .text').should('have.text', firstQuoteText)
      })
  })
})