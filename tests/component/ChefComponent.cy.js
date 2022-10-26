import { mount } from "cypress/vue";
import "@testing-library/cypress";
import ChefComponent from "@/components/Chef/ChefComponent.vue";
Cypress.Commands.add("mount", mount);
describe("ChefComponent", () => {
  it("mounts", () => {
    cy.mount(ChefComponent);
  });
});
