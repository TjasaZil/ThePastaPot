<template>
  <section class="w-full mx-auto text-left">
    <div class="flex flex-row justify-start w-4/6 items-start space-x-3">
      <h4>{{ heading }}</h4>
      <h5>{{ price }}</h5>
    </div>
    <div role="paragraph" class="text-primary font-light text-sm">
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
    },
    price: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped></style>
