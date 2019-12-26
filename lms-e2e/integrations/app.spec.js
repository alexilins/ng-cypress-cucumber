describe("test", () => {
  it("test dummy app", () => {
    cy.visit("/");
    cy.get("h2").contains("Resources");
  });
});
