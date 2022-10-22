import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import NavComponent from "@/components/Navigation/NavComponent.vue";

//has hamburger

//has list item
//each list item has a link
//each list item is appropriate
//hamburger shows list item when clicked
describe("NavComponnet", () => {
  describe("layout", () => {
    it("has a heading", () => {
      render(NavComponent);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has a heading that says 'The Pasta Pot'", () => {
      render(NavComponent);
      let heading = screen.queryByText("The Pasta Pot");
      expect(heading).toBeInTheDocument();
    });
    it("has a list", () => {
      render(NavComponent);
      let list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
    it("has five list items", () => {
      render(NavComponent);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(5);
    });
    describe("appropriate list item text", () => {
      it("has listItem 'home'", () => {
        render(NavComponent);
        let home = screen.queryByText("home");
        expect(home).toBeInTheDocument();
      });
    });
  });
});
