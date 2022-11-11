import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import ContactComponent from "@/components/Contact/ContactComponent.vue";

describe("ContactComponent", () => {
  describe("layout", () => {
    it("has a heading", () => {
      render(ContactComponent);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has appropriate heading text", () => {
      render(ContactComponent);
      let heading = screen.queryByText("contact");
      expect(heading).toBeInTheDocument();
    });
    it("has separator", () => {
      render(ContactComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has 4 paragraph items", () => {
      render(ContactComponent);
      let paragraph = screen.queryAllByRole("paragraph");
      expect(paragraph.length).toBe(4);
    });
    it("has appropriate contact information", ()=>{
      render(ContactComponent);
      const contactArray=["1972 Cottonwood Lane, Nashville, Tennessee","thepastapot@mail.com","+1 228-221-2686","follow us on social media"]
      for(let i = 0; i<contactArray.length; i++){
        const contact = screen.queryByText(contactArray[i]);
        expect(contact).toBeInTheDocument()
      }
    })
    
    it("has 4 icons", () => {
      render(ContactComponent);
      let image = screen.queryAllByRole("img");
      expect(image.length).toBe(4);
    });
  });
  describe("testing image visibility", () => {
    it("has appropriate alt text on images", ()=>{
      render(ContactComponent);
      const altArray = ["email","phone","facebook","instagram"]
      for(let i =0; i<altArray.length;i++){
        const alt = screen.queryByAltText(altArray[i]);
        expect(alt).toBeInTheDocument()
      }
    })
  });
});
