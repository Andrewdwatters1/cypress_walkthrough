describe('Input form', () => {

  const text = "Let's go to hawaii"
  it('accepts a user input', () => {
    cy.visit('/')
    cy.get('[data-cy-input]')
      .type(text)
      .should('have.value', text)
  })
  it('submits a new todo', () => {
    cy.visit('/')

    //submits a new todo on keydown[enter]
    cy.get('[data-cy-input]')
      .type(text)
      .type('{enter}')
      .should('have.value', '')

    //submits a new todo on form button submit
    cy.get('[data-cy-input]').type(text)
    cy.get('[data-cy-submit]').click()
    cy.get('[data-cy-input]').should('have.value', '')

    cy.get('.todos')
      .should('be.visible')
      .should('have.length', 6)
        .eq(-1)
        .should('contain', text)
  }) 
})