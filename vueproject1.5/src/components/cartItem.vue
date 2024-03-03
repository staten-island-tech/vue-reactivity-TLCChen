<template>
  <div class="item">
    <h2>{{ cartCard.name }}</h2>
    <img :src="cartCard.sprite" :alt="cartCard.name" />
    <div class="btn">
      <h2>${{ cartCard.price }}</h2>
      <button @click="remove">Remove</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/carts";
import { ref, reactive } from "vue";
const props = defineProps({
  cartCard: Object,
});

const store = useCounterStore();
function remove() {
  store.cart = store.cart.filter((item) => item != props.cartCard);
  store.price.price -= props.cartCard.price;
}
</script>

<style scoped>
img {
  width: 60%;
  image-rendering: pixelated;
}
.item {
  background: linear-gradient(160deg, #39dfdf, #193cd8);
  border: solid 0.5rem #ffe066;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem rgb(0, 0, 0);
  width: 80%;
  height: auto;
  margin: 1rem;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
h2,
.btn {
  font-size: 2rem;
  background: linear-gradient(150deg, #aa0f76, #f565e2);
}
</style>
