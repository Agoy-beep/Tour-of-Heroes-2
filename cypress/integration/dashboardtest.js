
context('checking pages', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/dashboard')
  })

  it('gets the heroes page', () => {
    cy.get('#topHeroes')
      .should('contain', 'Top Heroes')
  })

  it('should go to heroes', () => {
    cy.get('#heroesButton')
      .click()
    cy.get('app-heroes > h2')
      .should('contain','My Heroes' )
    cy.get('.heroes')
      .should('contain','Magneta')
  })

  it('')

});
