<template>
  <section
    class="pt-12 bg-dark text-highligth w-full flex flex-col justify-center items-center mx-auto text-center"
  >
    <h2>contact</h2>
    <hr />
    <div role="paragraph">1972 Cottonwood Lane, Nashville, Tennessee</div>
    <div class="flex justify-center items-center space-x-3">
      <img src="@/assets/contact/email.png" alt="email" />
      <div role="paragraph">thepastapot@mail.com</div>
    </div>
    <div class="flex justify-center items-center space-x-3">
      <img src="@/assets/contact/phone.png" alt="phone" />
      <div role="paragraph">+1 228-221-2686</div>
    </div>
    <div role="paragraph">follow us on social media</div>
    <div class="flex justify-center items-center space-x-3">
      <img src="@/assets/contact/facebook.png" alt="facebook" />
      <img src="@/assets/contact/instagram.png" alt="instagram" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped>
img {
  @apply w-7;
}
</style>
