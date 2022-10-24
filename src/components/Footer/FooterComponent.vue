<template>
  <section class="bg-dark pt-6 w-full">
    <hr class="bg-highligth border border-solid border-highligth" />
    <div
      class="w-full mx-auto p-4 flex flex-row justify-between items-center text-highligth"
    >
      <div class="flex flex-row justify-center items-center space-x-2">
        <div>&#169;</div>
        <div>
          2022-<a href="https://github.com/zuzexx" target="_blank">Zuzexx</a>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center space-x-2">
        <img src="@/assets/contact/facebook.png" alt="facebook" class="icon" />
        <img
          src="@/assets/contact/instagram.png"
          alt="instagram"
          class="icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scope>
.icon {
  @apply w-7;
}
</style>
