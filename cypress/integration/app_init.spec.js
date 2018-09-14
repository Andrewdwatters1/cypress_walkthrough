describe('App initialization', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('all todo items loaded on page load', () => {
    cy.pause()
    cy.get('.todos')
      .should('exist')
        .and('have.length', 4)
  });

  it('focus goes to new todo input', () => {
    cy.focused().should('exist')
  });
})