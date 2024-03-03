<template>
  <div class="item">
    <h2>{{ itemCard.name }}</h2>
    <img :src="itemCard.sprite" alt="" />
    <div class="btn">
      <h2>${{ itemCard.price }}</h2>
      <button @click="addItem">Buy</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/carts";
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
const store = useCounterStore();
const props = defineProps({
  itemCard: Object,
});

function addItem() {
  store.cart.push({
    name: props.itemCard.name,
    sprite: props.itemCard.sprite,
    price: props.itemCard.price,
  });
  store.price.price += props.itemCard.price;
}
</script>

<style scoped>
h2,
.btn {
  font-size: 2rem;
  background: linear-gradient(150deg, #aa0f76, #f565e2);
}
.item {
  background: linear-gradient(160deg, #39dfdf, #193cd8);
  border: solid 0.5rem #ffe066;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem rgb(0, 0, 0);
  width: 45%;
  margin: 1rem;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
img {
  width: 70%;
  image-rendering: pixelated;
}
</style>
