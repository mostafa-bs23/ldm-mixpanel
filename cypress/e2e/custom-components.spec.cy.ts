const events: any = { 
    "events": [
        { 
            "eventName": "Registered", 
            "eventData": { 
                "some": "data", 
                "token": "05f2d82b5be065eb0928aef5a24f68ee" 
            } 
        }
    ] 
}

describe('CustomEvents component', () => {
    beforeEach(() => {
        cy.visit('/custom-events')
    })
    it('should render events data', () => {
        cy.get('h2').should('have.text', 'Event Data')
        cy.get('hr').should('be.visible')
        cy.get('p').should(($p) => {
            // parse the text from the <p> and check if it matches the expected output
            const jsonData = JSON.parse($p.text())
            expect(jsonData).to.deep.equal(events)
        })
    })
})
