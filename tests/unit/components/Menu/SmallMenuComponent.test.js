import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import SmallMenuComponent from "@/components/Menu/SmallMenuComponent.vue";

describe("SmallMenuComponent", () => {
  describe("layout", () => {
    it("has a heading", () => {
      render(SmallMenuComponent);
      let heading = screen.queryAllByRole("heading");
      expect(heading.length).toBe(2);
    });
    it("has paragraph", () => {
      render(SmallMenuComponent);
      let paragraph = screen.queryByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
    });
  });
});
