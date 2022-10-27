import "@testing-library/cypress/add-commands";
import { mount } from "cypress/vue";
import MenuComponent from "@/components/Menu/MenuComponent.vue";

Cypress.Commands.add("mount", mount);

describe("MenuComponent", () => {
  it("mounts", () => {
    cy.mount(MenuComponent);
  });
  describe("proper text", () => {
    it("menu exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("menu").should("exist");
    });
    it("menu is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("menu").should("be.visible");
    });

    it("pasta exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("pasta").should("exist");
    });
    it("pasta is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("pasta").should("be.visible");
    });

    it("Spaghetti alla Carbonara exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Spaghetti alla Carbonara").should("exist");
    });
    it("Spaghetti alla Carbonara is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Spaghetti alla Carbonara").should("be.visible");
    });

    it("Eggs, bacon, cream exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Eggs, bacon, cream").should("exist");
    });
    it("Eggs, bacon, cream is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Eggs, bacon, cream").should("be.visible");
    });

    it("Penne all’Arrabbiata exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne all’Arrabbiata").should("exist");
    });
    it("Penne all’Arrabbiata is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne all’Arrabbiata").should("be.visible");
    });

    it("Tomato sauce, chilli, extravirgin olive oil exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Tomato sauce, chilli, extravirgin olive oil").should(
        "exist"
      );
    });
    it("Tomato sauce, chilli, extravirgin olive oil is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Tomato sauce, chilli, extravirgin olive oil").should(
        "be.visible"
      );
    });

    it("Penne al Pesto exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne al Pesto").should("exist");
    });
    it("Penne al Pesto is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne al Pesto").should("be.visible");
    });

    it("Pasta with Pesto exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Pasta with Pesto").should("exist");
    });
    it("Pasta with Pesto is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Pasta with Pesto").should("be.visible");
    });

    it("Pappardelle speck e gorgonzola exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Pappardelle speck e gorgonzola").should("exist");
    });
    it("Pappardelle speck e gorgonzola is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Pappardelle speck e gorgonzola").should("be.visible");
    });

    it("Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream exists", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream"
      ).should("exist");
    });
    it("Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream"
      ).should("be.visible");
    });

    it("Penne panna e prosciutto crudo exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne panna e prosciutto crudo").should("exist");
    });
    it("Penne panna e prosciutto crudo is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne panna e prosciutto crudo").should("be.visible");
    });

    it("Cream, “Sauris” raw ham P.G.I, mushrooms exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Cream, “Sauris” raw ham P.G.I, mushrooms").should("exist");
    });
    it("Cream, “Sauris” raw ham P.G.I, mushrooms is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Cream, “Sauris” raw ham P.G.I, mushrooms").should(
        "be.visible"
      );
    });

    it("Penne alla Amatriciana exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne alla Amatriciana").should("exist");
    });
    it("Penne alla Amatriciana is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne alla Amatriciana").should("be.visible");
    });

    it("Guanciale (cured pork cheeks), tomato sauce, chili exists", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Guanciale (cured pork cheeks), tomato sauce, chili"
      ).should("exist");
    });
    it("Guanciale (cured pork cheeks), tomato sauce, chili is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Guanciale (cured pork cheeks), tomato sauce, chili"
      ).should("be.visible");
    });

    it("Penne Golose exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne Golose").should("exist");
    });
    it("Penne al Pesto is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne al Pesto").should("be.visible");
    });

    it("Penne Golose exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne Golose").should("exist");
    });
    it("Penne Golose is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne Golose").should("be.visible");
    });

    it("Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese exists", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese"
      ).should("exist");
    });
    it("Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese"
      ).should("be.visible");
    });

    it("Penne Squisite exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne Squisite").should("exist");
    });
    it("Penne Squisite is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Penne Squisite").should("be.visible");
    });

    it("Shrimps, zucchini, cream exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Shrimps, zucchini, cream").should("exist");
    });
    it("Shrimps, zucchini, cream is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Shrimps, zucchini, cream").should("be.visible");
    });

    it("Spaghetti alla Puttanesca exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Spaghetti alla Puttanesca").should("exist");
    });
    it("Spaghetti alla Puttanesca is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Spaghetti alla Puttanesca").should("be.visible");
    });
    it("Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives exists", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives"
      ).should("exist");
    });
    it("Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText(
        "Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives"
      ).should("be.visible");
    });

    it("Natural mineral water exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Natural mineral water").should("exist");
    });
    it("GNatural mineral water is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Natural mineral water").should("be.visible");
    });

    it("Mineral sparkling water exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Mineral sparkling water").should("exist");
    });
    it("Mineral sparkling water is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Mineral sparkling water").should("be.visible");
    });

    it("Coca-cola, Coca Zero, Fanta exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Coca-cola, Coca Zero, Fanta").should("exist");
    });
    it("Coca-cola, Coca Zero, Fanta is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Coca-cola, Coca Zero, Fanta").should("be.visible");
    });

    it("Bitter Lemon, Tonic Water exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Bitter Lemon, Tonic Water").should("exist");
    });
    it("Bitter Lemon, Tonic Water is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Bitter Lemon, Tonic Water").should("be.visible");
    });

    it("Lemonade home made exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Lemonade home made").should("exist");
    });
    it("Lemonade home made is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Lemonade home made").should("be.visible");
    });

    it("Ice Tea exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Ice Tea").should("exist");
    });
    it("Ice Tea is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Ice Tea").should("be.visible");
    });

    it("Juices: peach, pear, blueberry, apple exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Juices: peach, pear, blueberry, apple").should("exist");
    });
    it("Juices: peach, pear, blueberry, apple is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Juices: peach, pear, blueberry, apple").should(
        "be.visible"
      );
    });
    it("Cockta - Herbal Cola exists", () => {
      cy.mount(MenuComponent);
      cy.findByText("Cockta - Herbal Cola").should("exist");
    });
    it("Cockta - Herbal Cola is visible", () => {
      cy.mount(MenuComponent);
      cy.findByText("Cockta - Herbal Cola").should("be.visible");
    });
  });
});
