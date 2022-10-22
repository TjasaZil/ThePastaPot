import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import NavComponent from "@/components/Navigation/NavComponent.vue";
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
    it("has a hamburger icon", () => {
      render(NavComponent);
      let hamburger = screen.queryByRole("img");
      expect(hamburger).toBeInTheDocument();
    });
    it("has 5 links", () => {
      render(NavComponent);
      let links = screen.queryAllByRole("link");
      expect(links.length).toBe(5);
    });
    describe("appropriate list item text", () => {
      it("has listItem 'home'", () => {
        render(NavComponent);
        let home = screen.queryByText("home");
        expect(home).toBeInTheDocument();
      });
      it("has listItem 'about us'", () => {
        render(NavComponent);
        let aboutUs = screen.queryByText("about us");
        expect(aboutUs).toBeInTheDocument();
      });
      it("has listItem 'menu'", () => {
        render(NavComponent);
        let menu = screen.queryByText("menu");
        expect(menu).toBeInTheDocument();
      });
      it("has listItem 'gallery'", () => {
        render(NavComponent);
        let gallery = screen.queryByText("gallery");
        expect(gallery).toBeInTheDocument();
      });
      it("has listItem 'contact'", () => {
        render(NavComponent);
        let contact = screen.queryByText("contact");
        expect(contact).toBeInTheDocument();
      });
    });
    describe("has appropriate link attributes", () => {
      it("has link attribute '#home'", () => {
        render(NavComponent);
        let home = screen.queryByText("home");
        expect(home).toHaveAttribute("href", "#home");
      });
      it("has link attribute '#about-us'", () => {
        render(NavComponent);
        let aboutUs = screen.queryByText("about us");
        expect(aboutUs).toHaveAttribute("href", "#about-us");
      });
      it("has attribute '#menu'", () => {
        render(NavComponent);
        let menu = screen.queryByText("menu");
        expect(menu).toHaveAttribute("href", "#menu");
      });
      it("has attribute '#gallery'", () => {
        render(NavComponent);
        let gallery = screen.queryByText("gallery");
        expect(gallery).toHaveAttribute("href", "#gallery");
      });
      it("has attribute '#contact'", () => {
        render(NavComponent);
        let contact = screen.queryByText("contact");
        expect(contact).toHaveAttribute("href", "#contact");
      });
    });
  });
});
