/// <reference types="cypress" />
describe('teste para forms candidatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Deve clicar no botão  ver detalhes da candidatura', () =>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher p formulário de inscrição', () =>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Luiz Fernando')
        cy.get('input[name="email"]').type('luizrodrigues-andrade@hotmail.com')
        cy.get('input[name="telefone"]').type('(31983507529)')
        cy.get('input[name="endereco"]').type('Rua pacifico belém 131, Dom Bosco')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})