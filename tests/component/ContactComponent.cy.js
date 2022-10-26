import "@testing-library/cypress/add-commands";
import { mount } from "cypress/vue";
import ContactComponent from "@/components/Contact/ContactComponent.vue";

Cypress.Commands.add("mount", mount);

describe("ContactComponent", () => {
  it("mounts", () => {
    cy.mount(ContactComponent);
  });
  describe("all of the images load properly", () => {
    it("loads email icon", () => {
      cy.mount(ContactComponent);
      cy.findByAltText("email").should("be.visible");
    });
    it("loads phone icon", () => {
      cy.mount(ContactComponent);
      cy.findByAltText("phone").should("be.visible");
    });
    it("loads facebook icon", () => {
      cy.mount(ContactComponent);
      cy.findByAltText("facebook").should("be.visible");
    });
    it("loads instagram icon", () => {
      cy.mount(ContactComponent);
      cy.findByAltText("instagram").should("be.visible");
    });
  });
});
