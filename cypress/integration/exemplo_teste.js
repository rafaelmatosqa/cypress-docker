describe('Teste Cypress com Docker', () => {
  it('Deve acessar o site', () => {
    cy.visit('https://www.example.com')
  })

  it('Deve visualizar elemento h1', () => {
    cy.get('h1').should('be.visible')
  })
})
