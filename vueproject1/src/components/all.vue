<template>
  <h1>PokemonCard Store</h1>
  <div class="bigBox">
    <div class="box">
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
    </div>

    <div class="cart">
      <h2 id="prices">Shopping cart</h2>
      <h2 id="prices">Total Price: ${{ price }}</h2>
      <div v-for="pokemon in shoppingCart" :key="pokemon.name" class="item2">
        <h2 class="h2s">{{ pokemon.name }}</h2>
        <img :src="pokemon.sprite" alt="" />
        <div class="buying">
          <h2 class="h2s">${{ pokemon.price }}</h2>
          <button
            @click="
              (price -= pokemon.price),
                (shoppingCart = shoppingCart.filter((t) => t !== pokemon))
            "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const pokemons = [
  {
    name: "Omastar",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    price: 2,
  },
  {
    name: "NIDOKING",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    price: 6,
  },
  {
    name: "NAGANADEL",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    price: 11,
  },
  {
    name: "SILICOBRA",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    price: 5,
  },
  {
    name: "ALAKAZAM",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    price: 7,
  },
  {
    name: "NIDOQUEEN",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    price: 5,
  },
  {
    name: "EXPLOUD",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    price: 2,
  },
  {
    name: "RAICHU",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    price: 2,
  },
  {
    name: "BURMY",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    price: 3,
  },
  {
    name: "GROTLE",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    price: 7,
  },
  {
    name: "PICHU",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    price: 10,
  },
  {
    name: "VENOMOTH",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    price: 7,
  },
  {
    name: "VOLCARONA",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    price: 3,
  },
  {
    name: "DRATINI",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    price: 11,
  },
  {
    name: "GIRAFARIG",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    price: 4,
  },
  {
    name: "DRAKLOAK",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    price: 6,
  },
  {
    name: "BALTOY",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    price: 2,
  },
  {
    name: "MUDKIP",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    price: 8,
  },
  {
    name: "SWADLOON",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    price: 7,
  },
  {
    name: "PARASECT",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    price: 7,
  },
  {
    name: "OCTILLERY",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    price: 5,
  },
];
const price = ref(0);
const shoppingCart = ref([]);
</script>

<style scoped>
h1 {
  text-align: center;
  width: 100vw;
}
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  background-color: rgb(170, 169, 169, 0.7);
}
.cart {
  width: 30%;
  background-color: rgb(170, 169, 169, 0.7);
}
.bigBox {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  margin: auto;
}
.h2s,
.buying {
  color: #000000;
  background: linear-gradient(150deg, #aa0f76, #f565e2);
}
#prices {
  text-align: center;
  background: linear-gradient(150deg, #8f9186, #dfdfdb);
}
img {
  width: 80%;
  image-rendering: pixelated;
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
.item2 {
  background: linear-gradient(160deg, #39dfdf, #193cd8);
  border: solid 0.5rem #ffe066;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem rgb(0, 0, 0);
  width: 80%;
  height: auto;
  margin: 1rem;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
