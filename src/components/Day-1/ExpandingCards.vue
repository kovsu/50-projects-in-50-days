<script setup lang="ts">
import { reactive } from "vue";

interface IImage {
  url: string;
  name: string;
  expand: boolean;
}

const imgData = reactive<IImage[]>([
  {
    url: "https://images.unsplash.com/photo-1521791599124-2b274f9a52c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    name: "Explore The World",
    expand: true,
  },
  {
    url: "https://images.unsplash.com/photo-1557847582-dff0a4f4a346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZCUyMGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Wild Forset",
    expand: false,
  },
  {
    url: "https://images.unsplash.com/photo-1608126313950-b17430292454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Sunny Beach",
    expand: false,
  },
  {
    url: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "City On Winter",
    expand: false,
  },
  {
    url: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",
    name: "Spring",
    expand: false,
  },
]);

function expandCard(name: string) {
  imgData.forEach((item) => {
    item.expand = false;

    if (item.name === name) {
      item.expand = true;
    }
  });
}
</script>

<template>
  <div class="show">
    <div
      class="item"
      v-for="item of imgData"
      :key="item.name"
      :class="{ active: item.expand }"
      @click="expandCard(item.name)"
    >
      <img :src="item.url" alt="" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.show {
  width: 80rem;
  height: 50rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
}

.item {
  flex: 0 0 10%;
  position: relative;

  border-radius: 50px;

  transition-property: border-radius, flex;
  transition-duration: 0.4s, 0.6s;
  transition-delay: 0.6s, 0s;

  overflow: hidden;
}

.item.active {
  flex-grow: 1;
  border-radius: 10px;
}

.item p {
  opacity: 0;
  visibility: hidden;

  position: absolute;
  bottom: 1rem;
  left: 1rem;

  color: #fff;
  font-size: 1.6rem;

  transition: 0s;
  transition-delay: 0s;
}

.item.active p {
  opacity: 1;
  visibility: visible;

  transition: 0.3s;
  transition-delay: 0.8s;
}

.show img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
