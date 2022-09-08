<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { allProjects } from "./composable/data";

const route = useRoute();
const showDes = ref(false);

const ReadmeMd = defineAsyncComponent(
  () => import(`./components/${route.params.name}/readme.md`)
);
</script>

<template>
  <div class="project-show">
    <router-link to="/" class="back">back</router-link>
    <button class="note-btn" @click="showDes = !showDes">
      <Icon icon="ep:close" v-if="showDes" />
      <Icon icon="fluent-emoji-high-contrast:label" v-else />
    </button>

    <ReadmeMd class="des prose" v-show="showDes"></ReadmeMd>
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
  height: 60rem;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.3);

  overflow-y: scroll;
}

button {
  font-family: "Lato", sans-serif;
}

.note-btn {
  position: absolute;
  top: -6rem;
  right: 1rem;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #9ca3af;
  transition: all 0.5s;

  font-size: 2.4rem;
}

.note-btn:hover {
  color: #393939;
}
</style>
