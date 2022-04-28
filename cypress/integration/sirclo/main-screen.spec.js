describe ("Main Screen",function(){
    it ("Access the webpage",function(){
        cy.request({
            url: '/',
            followRedirect: false,
        }).then((resp) => {
            expect(resp.status).to.eq(302)
        })
        cy.visit('/')
        cy.get('h1').should('include.text','Welcome!')
    })
})