const { describe } = require("mocha");

describe('navigate',() =>{
    it('it should navigate', () =>{
        cy.visit('https://demo.vercel.store/') 
    })
})