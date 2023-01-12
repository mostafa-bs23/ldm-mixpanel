/// <reference types="cypress" />

describe('Route testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should visit / home route', () => {
    cy.visit('/')
    cy.url().should('include', '/')
  })
  it('should visit /events route', () => {
    cy.visit('events')
    cy.url().should('include', 'events')
  })
  it('should visit /custom-events route', () => {
    cy.visit('custom-events')
    cy.url().should('include', '/custom-events')
  })
})
