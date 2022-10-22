<template>
  <section class="fixed top-0 left-0 w-full bg-dark text-highligth h-12">
    <div class="w-full h-12 flex justify-between items-center p-4 mx-auto">
      <h1>The Pasta Pot</h1>

      <!-- HAMBURGER -->
      <HamburgerComponent />

      <!-- DESKTOP LINKS -->
      <ul
        class="hidden lg:visible uppercase lg:flex flex-row justify-around items-center h-12 p-4"
      >
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

<style scoped>
li {
  @apply mr-4;
}
</style>
