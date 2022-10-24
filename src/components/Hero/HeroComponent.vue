<template>
  <section
    id="home"
    class="bg-image bg-primary w-full mt-12 text-highligth font-semibold"
  >
    <div
      class="flex flex-col justify-center items-center mx-auto text-center p-3 space-y-3"
    >
      <img class="mx-auto w-24" src="@/assets/logo.png" alt="logo image" />
      <h2 class="uppercase text-lg">Pasta with a soul</h2>
      <hr class="w-4/6 h-1 bg-dull border border-solid border-dull" />
      <div role="paragraph">Takeaway | Delivery</div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-image {
  background-image: url("@/assets/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
