import "@testing-library/cypress/add-commands";
import { mount } from "cypress/vue";
import SmallMenuComponent from "@/components/Menu/SmallMenuComponent.vue";

Cypress.Commands.add("mount", mount);

describe("SmallMenuComponent", () => {
  it("mounts", () => {
    cy.mount(SmallMenuComponent);
  });
});
