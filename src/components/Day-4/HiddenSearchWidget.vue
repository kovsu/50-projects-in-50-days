<script setup lang="ts">
import { ref } from "vue";

let active = ref(false);
</script>

<template>
  <div class="show">
    <div class="item">
      <button @click="active = !active" class="search-btn">
        <Icon class="icon" icon="charm:search" />
      </button>
      <input
        :class="{ active: active }"
        type="text"
        placeholder="Please input something .."
      />
    </div>
  </div>
</template>

<style scoped>
.show {
  width: 80rem;
  height: 50rem;
  background-color: #ffe898;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 2rem; */
  background-color: #fff;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
}

.search-btn {
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: none;
  background-color: #f65a83;
}

.icon {
  font-size: 2.4rem;
  color: #fff;
}

input {
  border: none;
  outline: none;

  max-width: 0;

  font-size: 1.6rem;
  opacity: 0.5;
  padding: 0.8rem 1.2rem;
  transition: max-width 1s ease-in-out;
  border-radius: 5rem;
}

input.active {
  padding: 0.8rem 1.2rem;
  max-width: 30rem;
}
</style>
