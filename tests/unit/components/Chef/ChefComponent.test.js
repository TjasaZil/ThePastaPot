import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import ChefComponent from "@/components/Chef/ChefComponent.vue";

describe("ChefComponent", () => {
  describe("layout", () => {
    it("has two headers", () => {
      render(ChefComponent);
      let heading = screen.queryAllByRole("heading");
      expect(heading.length).toBe(2);
    });
    it("has appropriate big header", () => {
      render(ChefComponent);
      let heading = screen.queryByText("chef with a capital letter");
      expect(heading).toBeInTheDocument();
    });
    it("has a spacer", () => {
      render(ChefComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has appropriate small heading", () => {
      render(ChefComponent);
      let heading = screen.queryByText("who is the master behind our food");
      expect(heading).toBeInTheDocument();
    });
    it("has two paragraphs", () => {
      render(ChefComponent);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(2);
    });
  });
});
