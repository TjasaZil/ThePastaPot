import { mount } from "cypress/vue";
import "@testing-library/cypress/add-commands";
import NavComponent from "@/components/Navigation/NavComponent.vue";

Cypress.Commands.add("mount", mount);

describe("NavComponent", () => {
  it("mounts", () => {
    cy.mount(NavComponent);
  });

  describe("testing links", () => {
    it("has proper home link", () => {
      cy.mount(NavComponent);

      cy.findByText("home").click();
      cy.location("hash").should("eq", "#home");
    });
    it("has proper about us link", () => {
      cy.mount(NavComponent);

      cy.findByText("about us").click();
      cy.location("hash").should("eq", "#about-us");
    });
    it("has proper menu link", () => {
      cy.mount(NavComponent);

      cy.findByText("menu").click();
      cy.location("hash").should("eq", "#menu");
    });
    it("has proper gallery link", () => {
      cy.mount(NavComponent);

      cy.findByText("gallery").click();
      cy.location("hash").should("eq", "#gallery");
    });
    it("has proper contact link", () => {
      cy.mount(NavComponent);

      cy.findByText("contact").click();
      cy.location("hash").should("eq", "#contact");
    });
  });
});
