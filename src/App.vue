<template>
  <section class="font-sans overflow-x-hidden">
    <NavComponent />
    <HeroComponent />
    <RestaurantComponent />
    <ChefComponent />
    <WorkingHours />
    <MenuComponent />
    <section class="bg-dark">
      <GalleryComponent />
      <ContactComponent />
      <FooterComponent />
    </section>
  </section>
</template>

<script>
import NavComponent from "@/components/Navigation/NavComponent.vue";
import HeroComponent from "./components/Hero/HeroComponent.vue";
import RestaurantComponent from "./components/Restaurant/RestaurantComponent.vue";
import ChefComponent from "./components/Chef/ChefComponent.vue";
import WorkingHours from "./components/Hours/WorkingHours.vue";
import GalleryComponent from "./components/Gallery/GalleryComponent.vue";
import ContactComponent from "./components/Contact/ContactComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
import MenuComponent from "./components/Menu/MenuComponent.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    HeroComponent,
    RestaurantComponent,
    ChefComponent,
    WorkingHours,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
  },
};
</script>

<style></style>
