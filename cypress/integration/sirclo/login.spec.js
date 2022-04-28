describe("Login Page",function(){
    it("Access the login page",function(){
        cy.visit('/login')
        cy.request({
            url: '/',
            followRedirect: false,
        }).then((resp) => {
            expect(resp.status).to.eq(302)
        })
    })
    it("Login - Positive",function(){
        cy.get('[type="text"]').type('root')
        cy.get('[type="password"]').type('root123')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('include.text','Welcome!')
    })
    it("Logout status",function(){
        cy.request({
            url: '/logout',
            followRedirect: false,
          }).then((resp) => {
            expect(resp.status).to.eq(302)
            expect(resp.redirectedToUrl).to.include('https://qa-interview.srcli.xyz/')
          })
    })
})