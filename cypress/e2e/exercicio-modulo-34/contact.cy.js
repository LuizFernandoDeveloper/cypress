/// <reference types="cypress" />

describe('Teste para de uma aplicaçã', () => {
    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Testar se na pagina tem 4 inputs e para testar se o h1 tem o exto correto', () => {
        cy.get('input').should('have.length', 3)
        cy.get('h1').should('have.text', 'Agenda de  contatos')
    })
    it('Teste para inclusão de contatos. Incluido nome  = Luiz Fernando Rodrigues', () => {
        cy.get('[type="text"]').type('Luiz Fernando Rodrigues')
        cy.get('[type="text"]').should('have.value', 'Luiz Fernando Rodrigues')
        cy.get('[type="email"]').type('luizrodrigues-andrade@hotmail.com')
        cy.get('[type="email"]').should('have.value', 'luizrodrigues-andrade@hotmail.com')
        cy.get('[type="tel"]').type('(31)983507529')
        cy.get('[type="tel"]').should('have.value', '(31)983507529')
        cy.get('.adicionar').click()

        cy.get('.sc-iAEyYk').children().last().find('ul').children().first().should('have.text', 'Luiz Fernando Rodrigues')
    })
    it('Teste para alteração de contatos. Mudando o nome  para  = carlos', () => {
        cy.get('.sc-iAEyYk').children().last().find('.edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Carlos')
        cy.get('[type="text"]').should('have.value', 'Carlos')
        cy.get('.alterar').click()
    })
    it('Teste para deletar contatos.', () => {
        cy.get('.sc-iAEyYk').children().last().find(' .delete').click()
    })
})