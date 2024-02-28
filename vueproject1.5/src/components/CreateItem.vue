<template>
  <div class="item">
    <h2>{{ itemCard.name }}</h2>
    <img :src="itemCard.sprite" alt="" />
    <h3>{{ itemCard.price }}</h3>
    <button @click="addItem">{{ num }}</button>
  </div>
</template>

<script setup>
// import {cart} from
import { ref, reactive } from "vue";
const props = defineProps({
  itemCard: Object,
});

const num = ref(0);
function addItem() {
  num.value++;
  cart.push({
    name: props.itemCard.name,
    sprite: props.itemCard.sprite,
    price: props.itemCard.price,
  });
  console.log(cart);
}
const cart = reactive([]);
</script>

<style scoped></style>
