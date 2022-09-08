<script setup lang="ts">
import { onMounted } from "vue";
import { loadProjects } from "./composable/data";

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
