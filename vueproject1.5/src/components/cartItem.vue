<template>
  <div class="item">
    <h2>{{ cartCard.name }}</h2>
    <img :src="cartCard.sprite" :alt="cartCard.name" />
    <h3>{{ cartCard.price }}</h3>
    <button @click="remove">Remove</button>
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
}
</script>

<style scoped>
.item {
  border: solid 0.2rem rgb(107, 125, 226);
  margin: 1rem auto;
}
</style>
