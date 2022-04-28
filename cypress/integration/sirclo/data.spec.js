describe ("Get data",function(){
    it ("Access data page",function(){
        cy.visit('/data')
        cy.request({
            url: '/data',
            followRedirect: false,
        }).then((resp) => {
            expect(resp.status).to.eq(302)
        })
    })
    it ("Not login",function(){
        cy.get('form').should('be.visible')
    })
    it ("Login",function(){
        cy.get('[type="text"]').type('root')
        cy.get('[type="password"]').type('root123')
        cy.get('[type="submit"]').click()
        cy.visit('/data')
    })
    it ("Filter Pemasukan",function(){
        cy.get('body > :nth-child(1)').should('have.text','Pemasukan')
        cy.get('body > :nth-child(3)').should('have.text','Pengeluaran')
    })
})