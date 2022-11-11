import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import WorkingHours from "@/components/Hours/WorkingHours.vue";

describe("WorkingHours", () => {
  describe("layout", () => {
    it("has 2 headings", () => {
      render(WorkingHours);
      let heading = screen.queryAllByRole("heading");
      expect(heading.length).toBe(2);
    });
    it("has two separators", () => {
      render(WorkingHours);
      let separator = screen.queryAllByRole("separator");
      expect(separator.length).toBe(2);
    });
    it("has 5 paragraphs", () => {
      render(WorkingHours);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(4);
    });
    describe("text", () => {
      it("has appropriate text text", () => {
        render(WorkingHours);
        const textArray=["working hours", "monday - friday", "10am", "8pm", "saturday - sunday", "closed"]
        for(let i = 0; i<textArray.length; i++){
          const text = screen.queryByText(textArray[i]);
          expect(text).toBeInTheDocument()
        }
      });
      
    });
  });
});
