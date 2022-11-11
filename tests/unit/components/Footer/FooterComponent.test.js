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
    it("has proper text in footer", ()=>{
      render(FooterComponent);
      const textArray=["©","2022-", "Zuzexx" ];
      for(let i = 0; i<textArray.length; i++){
        const text=screen.queryByText(textArray[i])
        expect(text).toBeInTheDocument()
      }
    })
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
    it("has proper image alt text", ()=>{
      render(FooterComponent);
      const altArray = ["facebook", "instagram"];
      for(let i = 0; i < altArray.length;i++){
        const alt = screen.queryByAltText(altArray[i]);
        expect(alt).toBeInTheDocument()
      }
    })
    it("has visible icons", ()=>{
      render(FooterComponent);
      let visibleArray= ["facebook", "instagram"];
      for(let i = 0; i < visibleArray.length;i++){
        const alt = screen.queryByAltText(visibleArray[i]);
        expect(alt).toBeVisible()
      }
    })
    
    
  });
});
