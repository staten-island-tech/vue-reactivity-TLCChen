<template>
  <div class="item">
    <h2>{{ cartCard.name }}</h2>
    <img :src="cartCard.sprite" alt="" />
    <h3>{{ cartCard.price }}</h3>
    <button @click="remove">Remove</button>
  </div>
</template>

<script setup>
import { cart } from "@/stores/carts";
import { ref, reactive } from "vue";
const props = defineProps({
  cartCard: Object,
});

function remove() {
  cart.filter((item) => item != props.cartCard);
}
</script>

<style scoped></style>
