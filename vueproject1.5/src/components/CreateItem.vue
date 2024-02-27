<template>
  <div class="item">
    <h2>{{ shoppingCart.name }}</h2>
    <img :src="shoppingCart.sprite" alt="" />
    <h3>{{ shoppingCart.price }}</h3>
    <button>Click Me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  shoppingCart: Object,
});
</script>

<style scoped></style>
