<template>
  <button @click="store.count++">Press A {{ store.count }}</button>
  <button @click="store.count++">Press c {{ store.count }}</button>
</template>

<script setup>
import { store } from "@/stores/counter";
</script>

<style scoped></style>
