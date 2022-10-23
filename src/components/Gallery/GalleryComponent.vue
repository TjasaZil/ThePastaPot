<template>
  <section class="mt-8 pt-5 bg-dark w-full">
    <div
      class="flex flex-col w-full justify-center items-center text-center text-highligth mx-auto"
    >
      <div class="space-y-3 p-8">
        <h2>gallery</h2>
        <hr />
      </div>
      <ul class="flex flex-wrap justify-center items-center mt-16">
        <li
          v-for="img in images"
          :key="img"
          class="w-full hover:bg-dull hover:opacity-40 max-w-md"
        >
          <img :src="img.image" :alt="img.alt" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import pasta1 from "@/assets/gallery/pasta1.jpg";
import pasta2 from "@/assets/gallery/pasta2.jpg";
import pasta3 from "@/assets/gallery/pasta3.jpg";
import pasta4 from "@/assets/gallery/pasta4.jpg";
import pasta5 from "@/assets/gallery/pasta5.jpg";
import pasta6 from "@/assets/gallery/pasta6.jpg";
import pasta7 from "@/assets/gallery/pasta7.jpg";
import pasta8 from "@/assets/gallery/pasta8.jpg";
import pasta9 from "@/assets/gallery/pasta9.jpg";
import pasta10 from "@/assets/gallery/pasta10.jpg";
import pasta11 from "@/assets/gallery/pasta11.jpg";
import pasta12 from "@/assets/gallery/pasta12.jpg";
export default {
  name: "GalleryComponent",
  components: {
    pasta1,
    pasta2,
    pasta3,
    pasta4,
    pasta5,
    pasta6,
    pasta7,
    pasta8,
    pasta9,
    pasta10,
    pasta11,
    pasta12,
  },
  data() {
    return {
      images: [
        { image: pasta1, alt: "pasta1" },
        { image: pasta2, alt: "pasta2" },
        { image: pasta3, alt: "pasta3" },
        { image: pasta4, alt: "pasta4" },
        { image: pasta5, alt: "pasta5" },
        { image: pasta6, alt: "pasta6" },
        { image: pasta7, alt: "pasta7" },
        { image: pasta8, alt: "pasta8" },
        { image: pasta9, alt: "pasta9" },
        { image: pasta10, alt: "pasta10" },
        { image: pasta11, alt: "pasta11" },
        { image: pasta12, alt: "pasta12" },
      ],
    };
  },
};
</script>

<style></style>
