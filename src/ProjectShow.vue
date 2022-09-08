<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { allProjects } from "./composable/data";

const route = useRoute();
const description = ref("");
const prefix = "./components/" + route.params.name;
const showDes = ref(false);

onMounted(() => {
  // loadProjects();
  // console.log(allProjects.value);

  import(/* @vite-ignore */ prefix + "/readme.md?raw")
    .then((content) => {
      // console.log(content.default);
      description.value = content.default;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <div class="project-show">
    <router-link to="/" class="back">back</router-link>
    <button class="note-btn" @click="showDes = true">note</button>
    <p class="des" v-show="showDes">
      <button class="close-btn" @click="showDes = false">close</button>
      {{ description }}
    </p>
    <component
      :is="allProjects.value[route.params.name as string].file"
    ></component>
  </div>
</template>

<style scoped>
.project-show {
  position: relative;
  width: 60vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back {
  position: absolute;
  top: -6rem;
  left: 1rem;
  font-size: 1.6rem;
  text-decoration: none;
  padding: 1rem 1.5rem;
  background-color: #000;
  color: #fff;
  border-radius: 1rem;
}

.des {
  width: 50rem;
  height: 30rem;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.3);

  overflow-y: scroll;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.note-btn {
  position: absolute;
  top: -6rem;
  right: 1rem;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
}
</style>
