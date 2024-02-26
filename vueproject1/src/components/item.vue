<template>
  <div v-for="pokemon in pokemons" :key="pokemon.name" class="item">
    <h2 class="h2s">{{ pokemon.name }}</h2>
    <img :src="pokemon.sprite" alt="" />
    <div class="buying">
      <h2 class="h2s">${{ pokemon.price }}</h2>
      <button
        @click="
          shoppingCart.push({
            name: pokemon.name,
            sprite: pokemon.sprite,
            price: pokemon.price,
          }),
            (price += pokemon.price)
        "
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script setup>
const shoppingCart = ref(Object);
</script>

<style scoped></style>
