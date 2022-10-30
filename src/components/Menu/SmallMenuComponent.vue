<template>
  <section
    class="w-full mx-auto text-left space-y-2 tablet:space-y-4 laptop:space-y-5 laptopl:space-y-6 4kay:space-y-8"
  >
    <div
      class="flex flex-row justify-start w-full items-start space-x-3 tablet:space-x-4 laptop:space-x-5 laptopl:space-x-6 4kay:space-x-8"
    >
      <h4>{{ heading }}</h4>
      <h5>{{ price }}</h5>
    </div>
    <div
      role="paragraph"
      class="text-primary font-light text-sm tablet:text-base laptop:text-lg laptopl:text-xl 4kay:text-2xl"
    >
      {{ text }}
    </div>
  </section>
</template>

<script>
export default {
  name: "SmallMenuComponent",
  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: "",
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
