// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new page should contain an h2 with "Best Seller Products"
    cy.get('h2').contains('Best Seller Products')


    
    })
})