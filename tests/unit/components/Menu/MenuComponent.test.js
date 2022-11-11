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
    it("has appropriate header text", ()=>{
      render(MenuComponent);
      const menuArray=["menu","pasta","drinks"]
      for(let i = 0; i<menuArray[i]; i++){
        const menu = screen.queryByText(menuArray[i]);
        expect(menu).toBeInTheDocument()
      }
    })
    it("has 9 paragraphs", () => {
      render(MenuComponent);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(17);
    });
    describe("text", () => {
      it("has appropriate pasta header text", ()=>{
        render(MenuComponent);
      const headerArray=["Spaghetti alla Carbonara","Penne all’Arrabbiata","Penne al Pesto","Pappardelle speck e gorgonzola", "Penne panna e prosciutto crudo","Penne alla Amatriciana", "Penne Golose","Penne Squisite","Spaghetti alla Puttanesca"]
      for(let i = 0; i<headerArray[i]; i++){
        const header = screen.queryByText(headerArray[i]);
        expect(header).toBeInTheDocument()
      }
    });
    it("has appropriate food paragraph text", ()=>{
      render(MenuComponent);
      const paragraphArray=["Eggs, bacon, cream","Tomato sauce, chilli, extravirgin olive oil","Pasta with Pesto","Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream", "Cream, “Sauris” raw ham P.G.I, mushrooms", "Guanciale (cured pork cheeks), tomato sauce, chili", "Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese", "Shrimps, zucchini, cream", "Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives"]
      for(let i = 0; i<paragraphArray[i]; i++){
        const paragraph = screen.queryByText(paragraphArray[i]);
        expect(paragraph).toBeInTheDocument()
      }
    })
    it("has appropriate drink paragraph text", ()=>{
      render(MenuComponent);
      const paragraphArray=["Natural mineral water","Mineral sparkling water", "Coca-cola, Coca Zero, Fanta", "Bitter Lemon, Tonic Water", "Lemonade home made", "Ice Tea", "Juices: peach, pear, blueberry, apple", "Cockta - Herbal Cola"]
      for(let i = 0; i<paragraphArray[i]; i++){
        const paragraph = screen.queryByText(paragraphArray[i]);
        expect(paragraph).toBeInTheDocument()
      }
    })
    });
  });
});
