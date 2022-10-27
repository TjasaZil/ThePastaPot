import { mount } from "cypress/vue";
import "@testing-library/cypress/add-commands";
import GalleryComponent from "@/components/Gallery/GalleryComponent.vue";

Cypress.Commands.add("mount", mount);

describe("GalleryComponent", () => {
  it("mounts", () => {
    cy.mount(GalleryComponent);
  });
  describe("pictures exist", () => {
    it("pasta1", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta1").should("exist");
    });
    it("pasta2", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta2").should("exist");
    });
    it("pasta3", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta3").should("exist");
    });
    it("pasta4", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta4").should("exist");
    });
    it("pasta5", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta5").should("exist");
    });
    it("pasta6", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta6").should("exist");
    });
    it("pasta7", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta7").should("exist");
    });
    it("pasta8", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta8").should("exist");
    });
    it("pasta9", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta9").should("exist");
    });
    it("pasta10", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta10").should("exist");
    });
    it("pasta11", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta11").should("exist");
    });
    it("pasta12", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta12").should("exist");
    });
  });
  describe("pictures are visible", () => {
    it("pasta1", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta1").should("be.visible");
    });
    it("pasta2", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta2").should("be.visible");
    });
    it("pasta3", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta3").should("be.visible");
    });
    it("pasta4", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta4").should("be.visible");
    });
    it("pasta5", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta5").should("be.visible");
    });
    it("pasta6", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta6").should("be.visible");
    });
    it("pasta7", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta7").should("be.visible");
    });
    it("pasta8", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta8").should("be.visible");
    });
    it("pasta9", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta9").should("be.visible");
    });
    it("pasta10", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta10").should("be.visible");
    });
    it("pasta11", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta11").should("be.visible");
    });
    it("pasta12", () => {
      cy.mount(GalleryComponent);
      cy.findByAltText("pasta12").should("be.visible");
    });
  });
});
