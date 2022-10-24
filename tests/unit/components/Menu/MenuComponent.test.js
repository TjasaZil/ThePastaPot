import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import MenuComponent from "@/components/Menu/MenuComponent.vue";

describe("MenuComponent", () => {
  describe("layout", () => {
    it("has a headers", () => {
      render(MenuComponent);
      let heading = screen.queryAllByRole("heading");
      expect(heading.length).toBe(37);
    });
    it("has a menu header", () => {
      render(MenuComponent);
      let menu = screen.queryByText("menu");
      expect(menu).toBeInTheDocument();
    });
    it("has a pasta header", () => {
      render(MenuComponent);
      let pasta = screen.queryByText("pasta");
      expect(pasta).toBeInTheDocument();
    });
    it("has a drinks header", () => {
      render(MenuComponent);
      let drinks = screen.queryByText("drinks");
      expect(drinks).toBeInTheDocument();
    });
    it("has 9 paragraphs", () => {
      render(MenuComponent);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(17);
    });
    describe("pasta headers", () => {
      it("has Spaghetti alla Carbonara", () => {
        render(MenuComponent);
        let text = screen.queryByText("Spaghetti alla Carbonara");
        expect(text).toBeInTheDocument();
      });
      it("has Penne all’Arrabbiata", () => {
        render(MenuComponent);
        let text = screen.queryByText("Penne all’Arrabbiata");
        expect(text).toBeInTheDocument();
      });
      it("has Penne al Pesto", () => {
        render(MenuComponent);
        let text = screen.queryByText("Penne al Pesto");
        expect(text).toBeInTheDocument();
      });
      it("has Pappardelle speck e gorgonzola", () => {
        render(MenuComponent);
        let text = screen.queryByText("Pappardelle speck e gorgonzola");
        expect(text).toBeInTheDocument();
      });
      it("has Penne panna e prosciutto crudo", () => {
        render(MenuComponent);
        let text = screen.queryByText("Penne panna e prosciutto crudo");
        expect(text).toBeInTheDocument();
      });
      it("has Penne alla “Amatriciana”", () => {
        render(MenuComponent);
        let text = screen.queryByText("Penne alla Amatriciana");
        expect(text).toBeInTheDocument();
      });
      it("has Penne Golose", () => {
        render(MenuComponent);
        let text = screen.queryByText("Penne Golose");
        expect(text).toBeInTheDocument();
      });
      it("has Penne Squisite", () => {
        render(MenuComponent);
        let text = screen.queryByText("Penne Squisite");
        expect(text).toBeInTheDocument();
      });
      it("has Spaghetti alla Puttanesca", () => {
        render(MenuComponent);
        let text = screen.queryByText("Spaghetti alla Puttanesca");
        expect(text).toBeInTheDocument();
      });
    });
    describe("paragraph text", () => {
      it("has Eggs, bacon, cream", () => {
        render(MenuComponent);
        let text = screen.queryByText("Eggs, bacon, cream");
        expect(text).toBeInTheDocument();
      });
      it("has Tomato sauce, chilli, extravirgin olive oil", () => {
        render(MenuComponent);
        let text = screen.queryByText(
          "Tomato sauce, chilli, extravirgin olive oil"
        );
        expect(text).toBeInTheDocument();
      });
      it("has Pasta with Pesto", () => {
        render(MenuComponent);
        let text = screen.queryByText("Pasta with Pesto");
        expect(text).toBeInTheDocument();
      });
      it("has Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream", () => {
        render(MenuComponent);
        let text = screen.queryByText(
          "Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream"
        );
        expect(text).toBeInTheDocument();
      });
      it("has Cream, “Sauris” raw ham P.G.I, mushrooms", () => {
        render(MenuComponent);
        let text = screen.queryByText(
          "Cream, “Sauris” raw ham P.G.I, mushrooms"
        );
        expect(text).toBeInTheDocument();
      });
      it("has Guanciale (cured pork cheeks), tomato sauce, chili", () => {
        render(MenuComponent);
        let text = screen.queryByText(
          "Guanciale (cured pork cheeks), tomato sauce, chili"
        );
        expect(text).toBeInTheDocument();
      });
      it("has Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese", () => {
        render(MenuComponent);
        let text = screen.queryByText(
          "Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese"
        );
        expect(text).toBeInTheDocument();
      });
      it("has Shrimps, zucchini, cream", () => {
        render(MenuComponent);
        let text = screen.queryByText("Shrimps, zucchini, cream");
        expect(text).toBeInTheDocument();
      });
      it("has Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives", () => {
        render(MenuComponent);
        let text = screen.queryByText(
          "Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives"
        );
        expect(text).toBeInTheDocument();
      });
    });
    describe("drink headers", () => {
      it("has Natural mineral water", () => {
        render(MenuComponent);
        let text = screen.queryByText("Natural mineral water");
        expect(text).toBeInTheDocument();
      });
      it("has Mineral sparkling water", () => {
        render(MenuComponent);
        let text = screen.queryByText("Mineral sparkling water");
        expect(text).toBeInTheDocument();
      });
      it("has Coca-cola, Coca Zero, Fanta", () => {
        render(MenuComponent);
        let text = screen.queryByText("Coca-cola, Coca Zero, Fanta");
        expect(text).toBeInTheDocument();
      });
      it("has Bitter Lemon, Tonic Water", () => {
        render(MenuComponent);
        let text = screen.queryByText("Bitter Lemon, Tonic Water");
        expect(text).toBeInTheDocument();
      });
      it("has Lemonade home made", () => {
        render(MenuComponent);
        let text = screen.queryByText("Lemonade home made");
        expect(text).toBeInTheDocument();
      });
      it("has Ice Tea", () => {
        render(MenuComponent);
        let text = screen.queryByText("Ice Tea");
        expect(text).toBeInTheDocument();
      });
      it("has Juices: peach, pear, blueberry, apple", () => {
        render(MenuComponent);
        let text = screen.queryByText("Juices: peach, pear, blueberry, apple");
        expect(text).toBeInTheDocument();
      });
      it("has Cockta - Herbal Cola", () => {
        render(MenuComponent);
        let text = screen.queryByText("Cockta - Herbal Cola");
        expect(text).toBeInTheDocument();
      });
    });
  });
});
