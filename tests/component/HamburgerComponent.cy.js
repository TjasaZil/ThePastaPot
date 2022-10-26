import { mount } from "cypress/vue";
import "@testing-library/cypress/add-commands";
import HamburgerComponent from "@/components/Navigation/HamburgerComponent.vue";

Cypress.Commands.add("mount", mount);

describe("HamburgerComponent", () => {
  it("mounts", () => {
    cy.mount(HamburgerComponent);
  });
  it("has a hamburger icon", () => {
    cy.mount(HamburgerComponent);
    cy.findByRole("img").should("exist");
  });
  describe("links do not exist unless the hamburger is clicked", () => {
    it("invisible links", () => {
      cy.mount(HamburgerComponent);
      cy.findByRole("link").should("not.exist");
    });
  });
  describe("testing links", () => {
    it("has proper home link", () => {
      cy.mount(HamburgerComponent);
      cy.findByRole("img").click();
      cy.findByText("home").click();
      cy.location("hash").should("eq", "#home");
    });
    it("has proper about us link", () => {
      cy.mount(HamburgerComponent);
      cy.findByRole("img").click();
      cy.findByText("about us").click();
      cy.location("hash").should("eq", "#about-us");
    });
    it("has proper menu link", () => {
      cy.mount(HamburgerComponent);
      cy.findByRole("img").click();
      cy.findByText("menu").click();
      cy.location("hash").should("eq", "#menu");
    });
    it("has proper gallery link", () => {
      cy.mount(HamburgerComponent);
      cy.findByRole("img").click();
      cy.findByText("gallery").click();
      cy.location("hash").should("eq", "#gallery");
    });
    it("has proper contact link", () => {
      cy.mount(HamburgerComponent);
      cy.findByRole("img").click();
      cy.findByText("contact").click();
      cy.location("hash").should("eq", "#contact");
    });
  });
});
