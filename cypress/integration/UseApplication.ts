describe('Use application', () => {
	it('Signs in and sign out', () => {
	  	cy.visit('http://localhost:3000')
	  	cy.get('button').first().click()
	  	cy.get('.LoginHeader').invoke('text').then((text) => {
	  		expect(text).to.equal('Sign Up')
	  	})
	  	cy.get('input').first().type('anton@cwik.biz')
	  	cy.get('input').eq(1).type('password')
	  	cy.get('form').submit()
	  	cy.wait(1000)
	  	cy.get('td').first().invoke('text').then((text) => {
	  		expect(text).to.equal('First Name')
	  	})
	  	cy.get('td').first().click()
	  	cy.get('td').eq(4).invoke('text').then((text) => {
	  		expect(text).to.equal('Coral')
	  	})

	  	cy.get('tr').eq(1).click()
	  	cy.wait(500)

	  	cy.get('h2').eq(1).invoke('text').then((text) => {
	  		expect(text).to.equal('Credit Indicator: 5.7')
	  	})

	  	cy.get('.Backlink').click()

	  	cy.wait(500)

	  	cy.get('.UserActionButton').click()

	  	cy.wait(500)

	  	cy.get('.LoginHeader').invoke('text').then((text) => {
	  		expect(text).to.equal('Login')
	  	})
	  	
	})
})
