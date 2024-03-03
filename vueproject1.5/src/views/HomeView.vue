<script setup>
import CreateItem from "@/components/CreateItem.vue";
import cartItem from "@/components/cartItem.vue";
import { useCounterStore } from "@/stores/carts";
const store = useCounterStore();

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
</script>

<template>
  <h1>PokemonCard Store</h1>
  <div id="main">
    <div id="store">
      <CreateItem
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :itemCard="pokemon"
      />
    </div>
    <div id="cart">
      <h2 id="prices">Shopping cart</h2>
      <h2 id="prices">Total Price: ${{ store.price.price }}</h2>
      <cartItem v-for="card in store.cart" :key="card.name" :cartCard="card" />
    </div>
  </div>
</template>

<style scoped>
#main {
  display: flex;
  justify-content: space-around;
}

#store {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(170, 169, 169, 0.7);
  border: solid 0.5rem #ffe066;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem rgb(0, 0, 0);
  width: 60%;
  margin: 1rem;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

#cart {
  flex-direction: column;
  width: 25%;
  background-color: rgb(170, 169, 169, 0.7);
  border: solid 0.5rem #ffe066;
  border-radius: 1rem;
  justify-content: space-between;
}
h1 {
  font-size: 8rem;
  text-align: center;
}
h2 {
  font-size: 3rem;
  text-align: center;
  background: linear-gradient(150deg, #eeea1f, #f565e2);
}
</style>
