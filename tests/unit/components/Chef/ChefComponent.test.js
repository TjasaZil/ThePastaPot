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
    it("has appropriate headings", () => {
      render(ChefComponent);
      const headingArray = ["chef with a capital letter", "who is the master behind our food"];

      for(let i = 0; i <headingArray.length; i++){
        let heading = screen.queryByText(headingArray[i]);
        expect(heading).toBeInTheDocument()
      }
    });
    it("has a spacer", () => {
      render(ChefComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    
    it("has two paragraphs", () => {
      render(ChefComponent);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(2);
    });
  });
});
