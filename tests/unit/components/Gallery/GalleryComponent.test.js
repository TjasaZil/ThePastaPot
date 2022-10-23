import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import GalleryComponent from "@/components/Gallery/GalleryComponent.vue";

describe("GalleryComponent", () => {
  describe("layout", () => {
    it("has a heading", () => {
      render(GalleryComponent);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has appropriate heading text", () => {
      render(GalleryComponent);
      let heading = screen.queryByText("gallery");
      expect(heading).toBeInTheDocument();
    });
    it("has a separator", () => {
      render(GalleryComponent);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has a list", () => {
      render(GalleryComponent);
      let list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
    it("has 12 listItems", () => {
      render(GalleryComponent);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(12);
    });
    it("has 12 images", () => {
      render(GalleryComponent);
      let img = screen.queryAllByRole("img");
      expect(img.length).toBe(12);
    });
    describe("images are visible", () => {
      it("has visible image1", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta1");
        expect(img).toBeVisible();
      });
      it("has visible image2", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta2");
        expect(img).toBeVisible();
      });
      it("has visible image3", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta3");
        expect(img).toBeVisible();
      });
      it("has visible image4", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta4");
        expect(img).toBeVisible();
      });
      it("has visible image5", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta5");
        expect(img).toBeVisible();
      });
      it("has visible image6", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta6");
        expect(img).toBeVisible();
      });
      it("has visible image7", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta7");
        expect(img).toBeVisible();
      });
      it("has visible image8", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta8");
        expect(img).toBeVisible();
      });
      it("has visible image9", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta9");
        expect(img).toBeVisible();
      });
      it("has visible image10", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta10");
        expect(img).toBeVisible();
      });
      it("has visible image11", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta11");
        expect(img).toBeVisible();
      });
      it("has visible image12", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta12");
        expect(img).toBeVisible();
      });
    });
    /*describe("appropriate image link", () => {
      it("has appropriate image1 link", () => {
        render(GalleryComponent);
        let img = screen.queryByAltText("pasta1");
        expect(img).toHaveAttribute("src", "@/assets/gallery/pasta1.jpg");
      });
    });*/
  });
});
