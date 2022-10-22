<template>
  <section class="bg-dull w-full mt-10 bg-image text-highligth text-xl">
    <div
      class="w-5/6 mx-auto flex flex-col justify-center items-center py-4 space-y-3"
    >
      <h2 class="font-bold uppercase text-dull">working hours</h2>
      <hr class="w-1/6 border border-solid border-secondary h-1 bg-dull" />
      <div role="paragraph" class="capitalize">monday - friday</div>
      <div role="paragraph" class="font-bold uppercase">10am</div>
      <hr class="w-1/6 border border-solid border-secondary h-1 bg-dull" />
      <div role="paragraph" class="font-bold uppercase">8pm</div>
      <div role="paragraph" class="capitalize">saturday - sunday</div>
      <div role="paragraph" class="font-bold uppercase text-dull">closed</div>
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
</style>
