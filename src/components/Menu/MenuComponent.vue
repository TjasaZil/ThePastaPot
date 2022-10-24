<template>
  <section
    id="menu"
    class="p-10 pt-8 flex flex-col justify-start items-start text-left w-full m-auto"
  >
    <h2>menu</h2>
    <h3 class="mt-5">pasta</h3>
    <SmallMenuComponent
      v-for="menu in menus"
      :key="menu"
      :heading="menu.head"
      :price="menu.price"
      :text="menu.text"
      class="mt-5"
    />
    <h3 class="mt-5">drinks</h3>
    <SmallMenuComponent
      v-for="drink in drinks"
      :key="drink"
      :heading="drink.head"
      :price="drink.price"
      class="mt-5"
    />
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

<style></style>
