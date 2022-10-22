<template>
  <section>
    <NavComponent />
    <HeroComponent />
  </section>
</template>

<script>
import NavComponent from "@/components/Navigation/NavComponent.vue";
import HeroComponent from "./components/Hero/HeroComponent.vue";
export default {
  name: "App",
  components: { NavComponent, HeroComponent },
};
</script>

<style></style>
