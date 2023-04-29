describe('Like Button', () => {
  it('should increment like count', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a Like button
    const button = cy.get('button');
    
    // and click it
    button.click();

    // The count should be 1
    button.contains('1');
  });
});