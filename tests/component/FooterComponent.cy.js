import { mount } from "cypress/vue";
import "@testing-library/cypress/add-commands";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
//import { getByAltText } from "@testing-library/dom";

Cypress.Commands.add("mount", mount);

describe("FooterComponent", () => {
  it("mounts", () => {
    cy.mount(FooterComponent);
  });
  describe("images", () => {
    it("has visible facebook image", () => {
      cy.mount(FooterComponent);
      cy.findByAltText("facebook").should("be.visible");
    });

    it("has visible instagram image", () => {
      cy.mount(FooterComponent);
      cy.findByAltText("instagram").should("be.visible");
    });
  });
  describe("github link", () => {
    it("has zuzexx text", () => {
      cy.mount(FooterComponent);
      cy.findByText("Zuzexx").should("exist");
    });
    it("has a link", () => {
      cy.mount(FooterComponent);
      cy.findByRole("link").should("exist");
    });
    it("goes to github", () => {
      cy.mount(FooterComponent);
      cy.findByRole("link").click();
      cy.url().should("include", "https://github.com/zuzexx");
      cy.go("back");
    });
  });
});
