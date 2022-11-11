import { screen, render, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HamburgerComponent from "@/components/Navigation/HamburgerComponent.vue";

describe("HamburgerComponent", () => {
  describe("layout", () => {
    it("has a hamburger icon", () => {
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      expect(hamburger).toBeInTheDocument();
    });
  });
  describe("user Events", () => {
    it("shows a list when the hamburger is clicked", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
    it("hides a list when the hamburger is clicked twice", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      await user.click(hamburger);
      let list = screen.queryByRole("list");
      expect(list).toBeNull();
    });
    it("has 5 list items in list", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(5);
    });
    it("has 5 links in the list", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let links = screen.queryAllByRole("link");
      expect(links.length).toBe(5);
    });
  });
    it("has apropriate list item text", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      const listArray=["home","about us", "menu", "gallery", "contact"]
      for(let i = 0; i<listArray.length; i++){
        const list = screen.queryByText(listArray[i]);
        expect(list).toBeInTheDocument()
      }
    });
    it("has appropriate attributes ", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      const altArray=["home","about us", "menu", "gallery", "contact"]
      const attributeArray=["/#home","/#about-us", "/#menu", "/#gallery", "/#contact"]
      for(let i = 0; i<attributeArray.length; i++){
        const attribute = screen.queryByText(altArray[i]);
        expect(window.location.href).toContain(attributeArray[i]);
      }  
    });
  });

