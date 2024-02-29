<template>
  <div class="item">
    <h2>{{ itemCard.name }}</h2>
    <img :src="itemCard.sprite" alt="" />
    <h3>{{ itemCard.price }}</h3>
    <button @click="addItem">Buy</button>
  </div>
</template>

<script setup>
import { cart } from "@/stores/carts";
import { ref, reactive } from "vue";
const props = defineProps({
  itemCard: Object,
});

function addItem() {
  cart.push({
    name: props.itemCard.name,
    sprite: props.itemCard.sprite,
    price: props.itemCard.price,
  });
  console.log(cart);
}
</script>

<style scoped></style>
