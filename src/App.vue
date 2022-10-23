<template>
  <section>
    <NavComponent />
    <HeroComponent />
    <RestaurantComponent />
    <ChefComponent />
    <WorkingHours />
    <GalleryComponent />
    <ContactComponent />
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
  },
};
</script>

<style>
h2 {
  @apply uppercase text-3xl font-bold;
}
</style>
