<template>
  <div>
    <img
      class="w-7 h-7"
      src="@/assets/pasta.png"
      alt="hamburger icon"
      @click="hamburgerOpen"
    />
    <ul v-if="this.open">
      <li><a href="#home">home</a></li>
      <li><a href="#about-us">about us</a></li>
      <li><a href="#menu">menu</a></li>
      <li><a href="#gallery">gallery</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HamburgerComponent",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    hamburgerOpen() {
      if (!this.open) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
};
</script>

<style></style>
