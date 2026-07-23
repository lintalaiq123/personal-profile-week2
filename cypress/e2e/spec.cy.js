describe("Personal Profile Website - Cypress Tests", () => {

  beforeEach(() => {
    cy.visit("https://personal-profile-week2.vercel.app/");
  });

  it("should verify the page title", () => {
    cy.title().should("eq", "Linta Laiq | Software QA Intern");
  });

  it("should navigate to the About section", () => {
    cy.contains("a", "About").click();

    cy.get("#about").should("be.visible");
  });

  it("should reject an invalid email address", () => {
    cy.get("#name").type("Linta Laiq");
    cy.get("#email").type("lintaa@invalid");
    cy.get("#message").type("This is a test message.");

    cy.contains("button", "Send Message").click();

    cy.get("#emailError").should("be.visible");
  });

});