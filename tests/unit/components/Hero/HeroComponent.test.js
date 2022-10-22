import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import HeroComponent from "@/components/Hero/HeroComponent.vue";

describe("HeroComponent", () => {
  describe("layout", () => {
    it("has a logo image", () => {
      render(HeroComponent);
      let image = screen.queryByRole("img");
      expect(image).toBeInTheDocument();
    });
    it("has a header", () => {
      render(HeroComponent);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has a heading that says 'Pasta with a soul'", () => {
      render(HeroComponent);
      let heading = screen.queryByText("Pasta with a soul");
      expect(heading).toBeInTheDocument();
    });
    it("has a separator", () => {
      render(HeroComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has paragraph", () => {
      render(HeroComponent);
      let paragraph = screen.queryByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
    });
    it("paragraph has appropriate text 'Takeaway | Delivery'", () => {
      render(HeroComponent);
      let paragraph = screen.queryByText("Takeaway | Delivery");
      expect(paragraph).toBeInTheDocument();
    });
  });
});
