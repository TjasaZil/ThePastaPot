import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import WorkingHours from "@/components/Hours/WorkingHours.vue";

describe("WorkingHours", () => {
  describe("layout", () => {
    it("has heading", () => {
      render(WorkingHours);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has appropriate headinh: 'working hours'", () => {
      render(WorkingHours);
      let heading = screen.queryByText("working hours");
      expect(heading).toBeInTheDocument();
    });
    it("has two separators", () => {
      render(WorkingHours);
      let separator = screen.queryAllByRole("separator");
      expect(separator.length).toBe(2);
    });
    it("has 5 paragraphs", () => {
      render(WorkingHours);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(5);
    });
    describe("paragraph text", () => {
      it("has 'monday - friday' text", () => {
        render(WorkingHours);
        let paragraph = screen.queryByText("monday - friday");
        expect(paragraph).toBeInTheDocument();
      });
      it("has '10am' text", () => {
        render(WorkingHours);
        let paragraph = screen.queryByText("10am");
        expect(paragraph).toBeInTheDocument();
      });
      it("has '8pm' text", () => {
        render(WorkingHours);
        let paragraph = screen.queryByText("8pm");
        expect(paragraph).toBeInTheDocument();
      });
      it("has saturday - sunday text", () => {
        render(WorkingHours);
        let paragraph = screen.queryByText("saturday - sunday");
        expect(paragraph).toBeInTheDocument();
      });
      it("has 'closed' text", () => {
        render(WorkingHours);
        let paragraph = screen.queryByText("closed");
        expect(paragraph).toBeInTheDocument();
      });
    });
  });
});
