import "@testing-library/cypress/add-commands";
import { mount } from "cypress/vue";
import WorkingHours from "@/components/Hours/WorkingHours.vue";

Cypress.Commands.add("mount", mount);

describe("WorkingHours", () => {
  it("mounts", () => {
    cy.mount(WorkingHours);
  });
  describe("appropriate text", () => {
    it("working hours exists", () => {
      cy.mount(WorkingHours);
      cy.findByText("working hours").should("exist");
    });
    it("working hours is visible", () => {
      cy.mount(WorkingHours);
      cy.findByText("working hours").should("be.visible");
    });
    it("monday - friday exists", () => {
      cy.mount(WorkingHours);
      cy.findByText("monday - friday").should("exist");
    });
    it("monday - friday is visible", () => {
      cy.mount(WorkingHours);
      cy.findByText("monday - friday").should("be.visible");
    });

    it("10am exists", () => {
      cy.mount(WorkingHours);
      cy.findByText("10am").should("exist");
    });
    it("10am is visible", () => {
      cy.mount(WorkingHours);
      cy.findByText("10am").should("be.visible");
    });
    it("8pm exists", () => {
      cy.mount(WorkingHours);
      cy.findByText("8pm").should("exist");
    });
    it("8pm is visible", () => {
      cy.mount(WorkingHours);
      cy.findByText("8pm").should("be.visible");
    });

    it("saturday - sunday exists", () => {
      cy.mount(WorkingHours);
      cy.findByText("saturday - sunday").should("exist");
    });
    it("saturday - sunday is visible", () => {
      cy.mount(WorkingHours);
      cy.findByText("saturday - sunday").should("be.visible");
    });
    it("closed exists", () => {
      cy.mount(WorkingHours);
      cy.findByText("8pm").should("exist");
    });
    it("closed is visible", () => {
      cy.mount(WorkingHours);
      cy.findByText("8pm").should("be.visible");
    });
  });
});
