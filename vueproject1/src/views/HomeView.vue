<script setup>
import { store } from "@/stores/counter";
import jonathan from "@/components/joe.vue";
</script>

<template>
  <h1>bye</h1>
  <jonathan />
  <button @click="store.count++">Press B {{ store.count }}</button>
</template>
