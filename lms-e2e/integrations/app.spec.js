describe("test", () => {
  it("test yandex", () => {
    cy.visit("https://yandex.ru/");
    cy.get('a[data-id="video"]').should("have.length", 1);
  });
});
