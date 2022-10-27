import { mount } from "cypress/vue";
import "@testing-library/cypress/add-commands";
import RestaurantComponent from "@/components/Restaurant/RestaurantComponent.vue";
Cypress.Commands.add("mount", mount);
describe("RestaurantComponent", () => {
  it("mounts", () => {
    cy.mount(RestaurantComponent);
  });
  it("loads the image", () => {
    cy.mount(RestaurantComponent);
    cy.findByRole("img").should("be.visible");
  });
});
