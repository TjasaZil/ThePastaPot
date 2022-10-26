import { mount } from "cypress/vue";
import "@testing-library/cypress/add-commands";
import ChefComponent from "@/components/Chef/ChefComponent.vue";
Cypress.Commands.add("mount", mount);
describe("ChefComponent", () => {
  it("mounts", () => {
    cy.mount(ChefComponent);
  });
  it("loads the image", () => {
    cy.mount(ChefComponent);
    cy.findByRole("img").should("be.visible");
  });
});
