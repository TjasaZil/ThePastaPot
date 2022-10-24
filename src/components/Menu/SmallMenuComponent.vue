<template>
  <section>
    <div class="flex flex-row justify-around w-4/6 items-center">
      <h4>{{ heading }}</h4>
      <h5>{{ price }}</h5>
    </div>
    <div role="paragraph">{{ text }}</div>
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
