/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localHost:3000')
    cy.clearLocalStorage()
  })

  it('starts with a CardHeader', () => {
    cy.get('[data-cy="cardHeader"]').should('exist')
  })
  it('Card toggles details', () => {
    cy.get('[data-cy="cardHeader"]')
      .first()
      .click()
    cy.get('[data-cy="cardDetails"]').should('exist')
  })
})
