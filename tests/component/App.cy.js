import { mount } from "cypress/vue";
import "@testing-library/cypress";
import App from "../../src/App.vue";

Cypress.Commands.add("mount", mount);

describe("App", () => {
  it("mounts", () => {
    cy.mount(App);
  });
});
