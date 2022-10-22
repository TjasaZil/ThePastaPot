import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import RestaurantComponent from "@/components/Restaurant/RestaurantComponent.vue";

describe("RestaurantComponent", () => {
  describe("layout", () => {
    it("has an image", () => {
      render(RestaurantComponent);
      let image = screen.queryByRole("img");
      expect(image).toBeInTheDocument();
    });
    it("has two headings", () => {
      render(RestaurantComponent);
      let heading = screen.queryAllByRole("heading");
      expect(heading.length).toBe(2);
    });
    it("has appropriate first heading", () => {
      render(RestaurantComponent);
      let heading = screen.queryByText("old story, new location");
      expect(heading).toBeInTheDocument();
    });
    it("has a separator", () => {
      render(RestaurantComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has appropriate second heading", () => {
      render(RestaurantComponent);
      let header = screen.queryByText("welcome to the pasta pot");
      expect(header).toBeInTheDocument();
    });
    it("has two paragraphs", () => {
      render(RestaurantComponent);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(2);
    });
  });
});
