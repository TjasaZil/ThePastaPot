<template>
  <section
    id="menu"
    class="p-10 pt-8 tablet:pt-10 laptop:pt-12 laptopl:pt-14 4kay:pt-16 flex flex-col justify-start items-start w-5/6 m-auto laptop:flex-row laptop:space-x-4"
  >
    <section class="flex flex-col laptop:w-1/2 text-left">
      <h2>menu</h2>
      <h3>pasta</h3>
      <SmallMenuComponent
        v-for="menu in menus"
        :key="menu"
        :heading="menu.head"
        :price="menu.price"
        :text="menu.text"
        class="mt-5"
      />
    </section>
    <section
      class="flex flex-col laptop:w-1/2 text-left justify-start items-start laptop:pt-7 laptopl:pt-9 4kay:pt-11"
    >
      <h3>drinks</h3>
      <SmallMenuComponent
        v-for="drink in drinks"
        :key="drink"
        :heading="drink.head"
        :price="drink.price"
        class="mt-5"
      />
    </section>
  </section>
</template>

<script>
import SmallMenuComponent from "./SmallMenuComponent.vue";
export default {
  name: "MenuComponent",
  components: { SmallMenuComponent },
  data() {
    return {
      menus: [
        {
          head: "Spaghetti alla Carbonara",
          price: "€ 9,00",
          text: "Eggs, bacon, cream",
        },
        {
          head: "Penne all’Arrabbiata",
          price: "€ 8,00",
          text: "Tomato sauce, chilli, extravirgin olive oil",
        },
        { head: "Penne al Pesto", price: "€ 9,00", text: "Pasta with Pesto" },
        {
          head: "Pappardelle speck e gorgonzola",
          price: "€ 10,00",
          text: "Speck (Italian smoked ham), gorgonzola cheese P.D.O., cream",
        },
        {
          head: "Penne panna e prosciutto crudo",
          price: "€ 10,00",
          text: "Cream, “Sauris” raw ham P.G.I, mushrooms",
        },
        {
          head: "Penne alla Amatriciana",
          price: "€ 9,00",
          text: "Guanciale (cured pork cheeks), tomato sauce, chili ",
        },
        {
          head: "Penne Golose",
          price: "€ 9,50",
          text: "Penne with buckwheat cherry tomatoes and after cooking stracciatella soft and creamy Italian cheese",
        },
        {
          head: "Penne Squisite",
          price: "€ 10,00",
          text: "Shrimps, zucchini, cream",
        },
        {
          head: "Spaghetti alla Puttanesca",
          price: "€ 9,00",
          text: "Anchovies in olive oil, capers, cherry tomatoes, garlic, black olives",
        },
      ],
      drinks: [
        { head: "Natural mineral water", price: "€ 1,50" },
        { head: "Mineral sparkling water", price: "€ 2,50" },
        { head: "Coca-cola, Coca Zero, Fanta", price: "€ 2,50" },
        { head: "Bitter Lemon, Tonic Water", price: "€ 2,50" },
        { head: "Lemonade home made", price: "€ 2,50" },
        { head: "Ice Tea", price: "€ 2,40" },
        { head: "Juices: peach, pear, blueberry, apple", price: "€ 2,50" },
        { head: "Cockta - Herbal Cola", price: "€ 2,50" },
      ],
    };
  },
};
</script>

<style scoped>
h3 {
  @apply pt-7 tablet:pt-9 laptop:pt-11 laptopl:pt-14 4kay:pt-16;
}
</style>
