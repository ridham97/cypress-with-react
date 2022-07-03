describe("Hello World", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Check the default heading name", () => {
    cy.get('[data-cy="heading"]').contains("Hello World");
  });

  it("Adding a new input value for updating a heading", () => {
    cy.get('[data-cy="input"]').clear().type("How are you all.");
    cy.get('[data-cy="heading"]').should("contain", "How are you all.");
  });
});
