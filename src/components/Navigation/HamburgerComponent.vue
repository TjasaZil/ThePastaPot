<template>
  <div class="laptop:hidden">
    <img
      class="w-7 h-7 tablet:h-10 tablet:w-10"
      src="@/assets/pasta.png"
      alt="hamburger icon"
      @click="hamburgerOpen"
    />
    <ul
      v-if="this.open"
      class="w-full space-x-3 bg-dark flex flex-col text-center items-center justify-center mx-auto fixed left-0 top-12 tablet:top-14"
    >
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

<style scoped>
li {
  @apply p-1 uppercase hover:bg-dull hover:text-primary w-full tablet:p-2 tablet:text-lg;
}
a {
  @apply hover:cursor-pointer;
}
</style>
