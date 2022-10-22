import { screen, render } from "@testing-library/vue";
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
  describe("appropriate list item text", () => {
    it("has home text", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let home = screen.queryByText("home");
      expect(home).toBeInTheDocument();
    });
    it("has about us text", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let aboutUs = screen.queryByText("about us");
      expect(aboutUs).toBeInTheDocument();
    });
    it("has  menu text", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let menu = screen.queryByText("menu");
      expect(menu).toBeInTheDocument();
    });
    it("has  gallery text", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let gallery = screen.queryByText("gallery");
      expect(gallery).toBeInTheDocument();
    });
    it("has contact text", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let contact = screen.queryByText("contact");
      expect(contact).toBeInTheDocument();
    });
  });
  describe("appropriate link attributes", () => {
    it("has #home attribute ", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let home = screen.queryByText("home");
      expect(home).toHaveAttribute("href", "#home");
    });
    it("has #about-us attribute ", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let aboutUs = screen.queryByText("about us");
      expect(aboutUs).toHaveAttribute("href", "#about-us");
    });
    it("has #home attribute ", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let menu = screen.queryByText("menu");
      expect(menu).toHaveAttribute("href", "#menu");
    });
    it("has #home attribute ", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let gallery = screen.queryByText("gallery");
      expect(gallery).toHaveAttribute("href", "#gallery");
    });
    it("has #home attribute ", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let hamburger = screen.queryByRole("img");
      await user.click(hamburger);
      let contact = screen.queryByText("contact");
      expect(contact).toHaveAttribute("href", "#contact");
    });
    describe("clicking a link goes to appropriate url", () => {
      it("has goes to /#home when clicking on home link ", async () => {
        const user = userEvent.setup();
        render(HamburgerComponent);
        let hamburger = screen.queryByRole("img");
        await user.click(hamburger);
        let home = screen.queryByText("home");
        await user.click(home);
        expect(window.location.href).toContain("/#home");
      });
      it("has goes to /#about-us when clicking on home about us ", async () => {
        const user = userEvent.setup();
        render(HamburgerComponent);
        let hamburger = screen.queryByRole("img");
        await user.click(hamburger);
        let aboutUs = screen.queryByText("about us");
        await user.click(aboutUs);
        expect(window.location.href).toContain("/#about-us");
      });
      it("has goes to /#menu when clicking on menu link ", async () => {
        const user = userEvent.setup();
        render(HamburgerComponent);
        let hamburger = screen.queryByRole("img");
        await user.click(hamburger);
        let menu = screen.queryByText("menu");
        await user.click(menu);
        expect(window.location.href).toContain("/#menu");
      });
      it("has goes to /#gallery when clicking on gallery link ", async () => {
        const user = userEvent.setup();
        render(HamburgerComponent);
        let hamburger = screen.queryByRole("img");
        await user.click(hamburger);
        let gallery = screen.queryByText("gallery");
        await user.click(gallery);
        expect(window.location.href).toContain("/#gallery");
      });
      it("has goes to /#contact when clicking on contact link ", async () => {
        const user = userEvent.setup();
        render(HamburgerComponent);
        let hamburger = screen.queryByRole("img");
        await user.click(hamburger);
        let contact = screen.queryByText("contact");
        await user.click(contact);
        expect(window.location.href).toContain("/#contact");
      });
    });
  });
});
