<template>
  <section
    class="fixed top-0 left-0 w-full bg-dark text-highligth h-12 tablet:h-16 laptop:h-18 laptopl:h-20 4kay:h-32 z-50"
  >
    <div
      class="w-full h-12 flex justify-between items-center p-4 mx-auto tablet:h-16 laptop:h-18 laptopl:h-20 4kay:h-32"
    >
      <h1>The Pasta Pot</h1>

      <!-- HAMBURGER -->
      <HamburgerComponent />

      <!-- DESKTOP LINKS -->
      <ul
        class="hidden laptop:visible uppercase laptop:flex flex-row justify-around items-center h-18 p-4 text-lg laptopl:text-xl 4kay:text-3xl"
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
  @apply mr-5 uppercase hover:font-semibold hover:underline 4kay:mr-8;
}
</style>
