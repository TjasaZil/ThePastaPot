import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import FooterComponent from "@/components/Footer/FooterComponent.vue";

describe("FooterComponent", () => {
  describe("layout", () => {
    it("has a separator", () => {
      render(FooterComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has a copyright symbol", () => {
      render(FooterComponent);
      let copyright = screen.queryByText("©");
      expect(copyright).toBeInTheDocument();
    });
    it("has a proper year", () => {
      render(FooterComponent);
      let text = screen.queryByText("2022-");
      expect(text).toBeInTheDocument();
    });
    it("has a proper text", () => {
      render(FooterComponent);
      let text = screen.queryByText("Zuzexx");
      expect(text).toBeInTheDocument();
    });
    it("has a link", () => {
      render(FooterComponent);
      let link = screen.queryByRole("link");
      expect(link).toBeInTheDocument();
    });
    it("has a proper link to my github", () => {
      render(FooterComponent);
      let link = screen.queryByRole("link");
      expect(link).toHaveAttribute("href", "https://github.com/zuzexx");
    });
    it("has two images", () => {
      render(FooterComponent);
      let image = screen.queryAllByRole("img");
      expect(image.length).toBe(2);
    });
    it("has image with facebook alt", () => {
      render(FooterComponent);
      let facebook = screen.queryByAltText("facebook");
      expect(facebook).toBeInTheDocument();
    });
    it("has image with instagram alt", () => {
      render(FooterComponent);
      let instagram = screen.queryByAltText("instagram");
      expect(instagram).toBeInTheDocument();
    });
    it("has visible facebook icon", () => {
      render(FooterComponent);
      let facebook = screen.queryByAltText("facebook");
      expect(facebook).toBeVisible();
    });
    it("has visible instagram icon", () => {
      render(FooterComponent);
      let instagram = screen.queryByAltText("instagram");
      expect(instagram).toBeVisible();
    });
  });
});
