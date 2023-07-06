/// <reference types="cypress" />
describe('teste para home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Deve renderizar  4 vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    it('Deve filtrar por fullstack', () => {
        //cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}') // Assim podemos da um enter sem ter que selecionar o botão para tall
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        //cy.get('.FormVagas_btnPesquisar__+mYmV').click() //podemos faazer assim com a classe ou id 
        cy.get('button[type="submit"]').click() // assim filtramos por um botão que tenha o type submit!
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length' , 1)
    })
})