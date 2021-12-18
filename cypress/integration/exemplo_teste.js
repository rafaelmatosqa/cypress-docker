describe('Teste Cypress com Docker', () => {
  it('Deve acessar o site', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
  })

  it('Deve visualizar elemento h5', () => {
    cy.get('h5').should('be.visible')
  })
})
