<template>
  <section
    class="mt-10 flex flex-col justify-center items-center text-left w-5/6 mx-auto space-y-3 tablet:space-y-5 laptop:flex-row laptop:space-x-4 laptopl:space-x-5 laptopl:mt-18 4kay:space-x-8 4kay:mt-24"
  >
    <section
      class="flex flex-col laptop:w-1/2 tablet:space-y-2 laptop:space-y-3 4kay:space-y-5"
    >
      <h2
        class="capitalize text-left text-3xl tablet:text-4xl laptop:text-3xl laptopl:text-4xl 4kay:text-5xl text-dark font-semibold pt-8 laptop:pt-0"
      >
        chef with a capital letter
      </h2>
      <hr class="w-1/6 h-1 border border-solid border-secondary bg-secondary" />
      <h3
        class="uppercase text-left text-lg tablet:text-xl laptop:text-lg laptopl:text-xl 4kay:text-2xl text-primary font-medium"
      >
        who is the master behind our food
      </h3>
      <div role="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit,
        eaque iste sint saepe voluptates pariatur ut distinctio esse ratione ea?
        Nam laborum quod labore. Commodi et sunt provident in.
      </div>
      <div role="paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        eveniet nemo consequatur odit neque incidunt ut cum explicabo natus
        blanditiis quisquam voluptatum voluptas quis facilis distinctio
        voluptatem rem! Consequuntur, ab!
      </div>
    </section>

    <img
      src="@/assets/chef.jpg"
      alt="chef image"
      class="laptop:w-1/2 4kay:w-1/3"
    />
  </section>
</template>

<script>
export default {
  name: "ChefComponent",
};
</script>

<style scoped>
div {
  @apply text-base tablet:text-lg laptop:text-base laptopl:text-lg 4kay:text-xl;
}
</style>
