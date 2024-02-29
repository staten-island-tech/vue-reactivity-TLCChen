<template>
  <div class="item">
    <h2>{{ cartCard.name }}</h2>
    <img :src="cartCard.sprite" alt="" />
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
  store.cart.value = store.cart.value.filter((item) => item != props.cartCard);
}
</script>

<style scoped></style>
