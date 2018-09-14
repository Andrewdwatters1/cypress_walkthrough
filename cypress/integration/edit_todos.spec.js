describe('todo button functionality', () => {
  it('marks todo as complete', () => {
    cy.visit('/')
    cy.get('.todos')
      .find('i#done')
      .first()
      .click()
    cy.get('.todos')
      .first()
      .find('p')
      .should('have.css', 'text-decoration')
  })

  it('edits a todo', () => {
    const text = 'stuff and things'
    cy.visit('/')
    cy.get('.todos')
      .find('i#edit')
      .first()
      .click()
    cy.get('.todos')
      .first()
      .find('input')
      .should('exist')
      .clear()
      .type(text)
      .type('{enter}')

    cy.get('.todos')
      .first()
      .contains(text)

  })

  it('deletes a todo', () => {
    cy.visit('/')
    cy.get('.todos')
      .find('i#delete')
      .first()
      .click()

    cy.get('.todos')
      .should('have.length', 3)
  })
})