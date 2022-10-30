<template>
  <section class="bg-dark pt-6 tablet:pt-10 laptop:pt-12 4kay:pt-16 w-full">
    <hr
      class="bg-highligth border 4kay:border-2 border-solid border-highligth"
    />
    <div
      class="w-full mx-auto p-4 4kay:p-8 flex flex-row justify-between items-center text-highligth"
    >
      <div
        class="flex flex-row justify-center items-center space-x-2 tablet:text-lg laptop:text-xl 4kay:text-4xl"
      >
        <div>&#169;</div>
        <div>
          2022-<a href="https://github.com/zuzexx" target="_blank">Zuzexx</a>
        </div>
      </div>
      <div
        class="flex flex-row justify-center items-center space-x-2 tablet:space-x-4 4kay:space-x-10"
      >
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
  @apply w-7 tablet:w-10 4kay:w-20;
}
</style>
