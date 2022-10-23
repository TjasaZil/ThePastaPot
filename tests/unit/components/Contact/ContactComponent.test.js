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
    it("has address", () => {
      render(ContactComponent);
      let address = screen.queryByText(
        "1972 Cottonwood Lane, Nashville, Tennessee"
      );
      expect(address).toBeInTheDocument();
    });
    it("has mail", () => {
      render(ContactComponent);
      let contact = screen.queryByText("thepastapot@mail.com");
      expect(contact).toBeInTheDocument();
    });
    it("Has a phone number", () => {
      render(ContactComponent);
      let number = screen.queryByText("+1 228-221-2686");
      expect(number).toBeInTheDocument();
    });
    it("has social media text", () => {
      render(ContactComponent);
      let social = screen.queryByText("follow us on social media");
      expect(social).toBeInTheDocument();
    });
    it("has 4 icons", () => {
      render(ContactComponent);
      let image = screen.queryAllByRole("img");
      expect(image.length).toBe(4);
    });
  });
  describe("testing image visibility", () => {
    it("has mail icon", () => {
      render(ContactComponent);
      let mail = screen.queryByAltText("email");
      expect(mail).toBeVisible();
    });
    it("has phone icon", () => {
      render(ContactComponent);
      let phone = screen.queryByAltText("phone");
      expect(phone).toBeVisible();
    });
    it("has facebook icon", () => {
      render(ContactComponent);
      let facebook = screen.queryByAltText("facebook");
      expect(facebook).toBeInTheDocument();
    });
    it("has instagram icon", () => {
      render(ContactComponent);
      let instagram = screen.queryByAltText("instagram");
      expect(instagram).toBeInTheDocument();
    });
  });
});
