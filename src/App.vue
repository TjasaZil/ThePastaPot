<template>
  <section>
    <NavComponent />
    <HeroComponent />
    <RestaurantComponent />
    <ChefComponent />
  </section>
</template>

<script>
import NavComponent from "@/components/Navigation/NavComponent.vue";
import HeroComponent from "./components/Hero/HeroComponent.vue";
import RestaurantComponent from "./components/Restaurant/RestaurantComponent.vue";
import ChefComponent from "./components/Chef/ChefComponent.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    HeroComponent,
    RestaurantComponent,
    ChefComponent,
  },
};
</script>

<style></style>
