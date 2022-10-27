import "@testing-library/cypress/add-commands";
import { mount } from "cypress/vue";
import HeroComponent from "@/components/Hero/HeroComponent.vue";

Cypress.Commands.add("mount", mount);
describe("HeroComponent", () => {
  it("mounts", () => {
    cy.mount(HeroComponent);
  });
  describe("appropriate text", () => {
    it("Pasta with a soul exists", () => {
      cy.mount(HeroComponent);
      cy.findByText("Pasta with a soul").should("exist");
    });
    it("Pasta with a soul is visible", () => {
      cy.mount(HeroComponent);
      cy.findByText("Pasta with a soul").should("be.visible");
    });
    it("Takeaway | Delivery exists", () => {
      cy.mount(HeroComponent);
      cy.findByText("Takeaway | Delivery").should("exist");
    });
    it("Takeaway | Delivery is visible", () => {
      cy.mount(HeroComponent);
      cy.findByText("Takeaway | Delivery").should("be.visible");
    });
  });
});
