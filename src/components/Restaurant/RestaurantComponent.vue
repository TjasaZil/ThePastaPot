<template>
  <section
    id="about-us"
    class="mt-16 flex flex-col justify-center items-center text-left w-5/6 mx-auto space-y-3 tablet:space-y-5 laptop:flex-row laptop:space-x-4 laptopl:space-x-5 laptopl:mt-18 4kay:space-x-8 4kay:mt-24"
    x-intersect="$el.classList.add('fadeLeftRight')"
  >
    <img
      src="@/assets/restaurant.jpg"
      alt="restaurant image"
      class="laptop:w-1/2 4kay:w-1/3"
      x-intersect="$el.classList.add('swingIn')"
    />
    <section
      class="flex flex-col space-y-2 laptop:w-1/2 laptop:space-y-3 4kay:space-y-7"
    >
      <h2
        class="capitalize text-left text-3xl tablet:text-4xl laptop:text-3xl laptopl:text-4xl 4kay:text-6xl text-dark font-semibold pt-8 laptop:pt-0"
        x-intersect="$el.classList.add('fadeIn')"
      >
        old story, new location
      </h2>
      <hr
        class="w-1/6 h-1 border border-solid border-secondary bg-secondary"
        x-intersect="$el.classList.add('fadeIn')"
      />
      <h3
        class="uppercase text-left text-lg tablet:text-xl laptop:text-lg laptopl:text-xl 4kay:text-3xl text-primary font-medium"
        x-intersect="$el.classList.add('fadeIn')"
      >
        welcome to the pasta pot
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
  </section>
</template>

<script>
export default {
  name: "RestaurantComponent",
};
</script>

<style scoped>
div {
  @apply text-base tablet:text-lg laptop:text-base laptopl:text-lg 4kay:text-2xl;
}
</style>
