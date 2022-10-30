<template>
  <section
    id="contact"
    class="pt-12 bg-dark text-highligth w-full flex flex-col justify-center items-center mx-auto text-center space-y-3 4kay:space-y-6"
  >
    <h2>contact</h2>
    <hr />
    <div class="paragraph" role="paragraph">
      1972 Cottonwood Lane, Nashville, Tennessee
    </div>
    <div class="flex justify-center items-center space-x-3 4kay:space-x-5">
      <img src="@/assets/contact/email.png" alt="email" class="icon" />
      <div class="paragraph" role="paragraph">thepastapot@mail.com</div>
    </div>
    <div class="flex justify-center items-center space-x-3 4kay:space-x-5">
      <img src="@/assets/contact/phone.png" alt="phone" class="icon" />
      <div class="paragraph" role="paragraph">+1 228-221-2686</div>
    </div>
    <div
      class="paragraph text-dull uppercase pt-3 font-semibold 4kay:pt-8"
      role="paragraph"
    >
      follow us on social media
    </div>
    <div class="flex justify-center items-center space-x-3 4kay:space-x-6 pb-3">
      <img src="@/assets/contact/facebook.png" alt="facebook" class="social" />
      <img
        src="@/assets/contact/instagram.png"
        alt="instagram"
        class="social"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped>
.icon {
  @apply w-5 tablet:w-7 4kay:w-14;
}
.social {
  @apply w-8 tablet:w-10 4kay:w-20;
}
.paragraph {
  @apply text-lg tablet:text-xl 4kay:text-4xl;
}
</style>
