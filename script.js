//your code here
() => { 
    cy.get('button').should('have.attr', 'id', 'submit'); 
    cy.get('button').should('have.attr', 'type', 'submit'); 
    cy.get('button').should('contain', 'Submit');
}