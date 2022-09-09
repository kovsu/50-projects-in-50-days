<script setup lang="ts">
import { allProjects } from "./composable/data";
</script>

<template>
  <h1>50 projects in 50 days</h1>
  <ul class="project">
    <li
      v-for="([key, _], index) in Object.entries(allProjects.value)"
      :key="key"
    >
      <router-link :to="'/project/' + key">
        <span>{{
          index + 1 < 10 ? "00" + (index + 1) : "0" + (index + 1)
        }}</span>
        {{ key }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  margin-bottom: 2rem;
  font-size: 2.4rem;
}

.project {
  width: 50rem;
  height: 50rem;
  list-style: none;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
}

.project li {
  width: 100%;
  height: 3rem;
}

.project li a {
  text-decoration: none;

  font-size: 1.6rem;
  color: #9ca3af;
  transition: all 0.5s;
}

.project li a:hover {
  color: #393939;
}

.project li span {
  text-decoration: none;

  font-size: 1.6rem;
  color: #9ca3af;
  opacity: 0.5;
  margin-right: 0.3rem;
}
</style>
