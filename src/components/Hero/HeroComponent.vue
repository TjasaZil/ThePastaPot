<template>
  <section
    id="home"
    class="bg-image bg-primary w-full mt-12 tablet:mt-16 laptop:mt-18 4kay:mt-32 text-highligth font-semibold"
  >
    <div
      class="flex flex-col justify-center items-center mx-auto text-center p-3 space-y-3 tablet:space-y-5 laptop:space-y-7 laptopl:space-y-9 4kay:space-y-14"
    >
      <img
        class="mx-auto w-24 tablet:w-32 tablet:pt-5 laptop:pt-6 laptop:w-36 laptopl:w-40 4kay:pt-12 4kay:w-56"
        src="@/assets/logo.png"
        alt="logo image"
        x-intersect="$el.classList.add('fadeIn')"
      />
      <h2 x-intersect="$el.classList.add('fadeLeftRight')">
        Pasta with a soul
      </h2>
      <hr class="w-4/6 h-1 bg-dull border border-solid border-dull" />
      <div
        role="paragraph"
        class="tablet:text-base tablet:pb-2 laptop:text-lg laptop:pb-4 laptopl:text-xl laptopl:pb-6 4kay:text-3xl 4kay:pb-8"
        x-intersect="$el.classList.add('fadeRightLeft')"
      >
        Takeaway | Delivery
      </div>
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
