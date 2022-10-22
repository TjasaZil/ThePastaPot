<template>
  <section>
    <div>
      <h1>The Pasta Pot</h1>

      <!-- HAMBURGER -->
      <HamburgerComponent />

      <!-- DESKTOP LINKS -->
      <ul class="hidden">
        <li><a href="#home">home</a></li>
        <li><a href="#about-us">about us</a></li>
        <li><a href="#menu">menu</a></li>
        <li><a href="#gallery">gallery</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
import HamburgerComponent from "./HamburgerComponent.vue";
export default {
  name: "NavComponent",
  components: { HamburgerComponent },
};
</script>

<style></style>
