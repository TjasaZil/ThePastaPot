<template>
  <section
    class="bg-dull w-full mt-10 tablet:mt-12 laptop:mt-14 laptopl:mt-16 4kay:mt-24 bg-image text-highligth text-xl"
  >
    <div
      class="w-5/6 mx-auto flex flex-col justify-center items-center py-4 space-y-3 tablet:space-y-4 tablet:py-6 laptop:py-8 laptopl:py-10 4kay:py-14 4kay:space-y-9"
    >
      <h2>working hours</h2>
      <hr class="w-1/6 border border-solid border-secondary h-1 bg-dull" />
      <div role="paragraph" class="days">monday - friday</div>
      <div role="paragraph" class="hour">10am</div>
      <hr class="w-1/6 border border-solid border-secondary h-1 bg-dull" />
      <div role="paragraph" class="hour">8pm</div>
      <div role="paragraph" class="days">saturday - sunday</div>
      <h2>closed</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkingHours",
};
</script>

<style scoped>
.bg-image {
  background-image: url("@/assets/working-hours.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
h2 {
  @apply font-bold uppercase text-dull tablet:text-2xl laptop:text-3xl laptopl:text-4xl 4kay:text-6xl;
}
.hour {
  @apply font-bold uppercase tablet:text-xl laptop:text-2xl laptopl:text-3xl 4kay:text-5xl;
}
.days {
  @apply capitalize tablet:text-lg laptop:text-xl laptopl:text-2xl 4kay:text-4xl;
}
</style>
