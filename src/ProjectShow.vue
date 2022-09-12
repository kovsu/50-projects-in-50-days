<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { allProjects } from "./composable/data";

const route = useRoute();
const showDes = ref(false);
const prefix =
  "https://github.com/kovsu/50-projects-in-50-days/tree/master/src/components";

const ReadmeMd = defineAsyncComponent(
  () => import(`./components/${route.params.name}/readme.md`)
);
</script>

<template>
  <div class="project-show">
    <header>
      <router-link to="/" class="back">back</router-link>
      <a class="soure" :href="prefix + '/' + route.params.name" target="_blank"
        >source</a
      >
      <button class="note-btn" @click="showDes = !showDes">
        <Icon icon="ep:close" v-if="showDes" />
        <Icon icon="fluent-emoji-high-contrast:label" v-else />
      </button>
    </header>

    <ReadmeMd class="des prose" v-show="showDes"></ReadmeMd>
    <div class="container">
      <Transition name="fade" mode="out-in">
        <component
          :is="allProjects.value[route.params.name as string].file"
        ></component>
      </Transition>
    </div>
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
  font-size: 1.6rem;
  text-decoration: none;
  padding: 1rem 1.5rem;
  background-color: #000;
  color: #fff;
  border-radius: 1rem;
}

header {
  width: 100%;
  height: auto;
  position: absolute;
  top: -6rem;

  display: flex;
  align-items: center;
  gap: 2rem;
}

.des {
  width: 50rem;
  height: 60rem;
  position: absolute;
  z-index: 10000;
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
  position: relative;
  z-index: 20000;
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

.soure {
  font-size: 1.8rem;
  margin-right: auto;
  color: #9ca3af;
  transition: all 0.5s;
}

.soure:hover {
  color: #393939;
}

.container {
  position: relative;
  width: 80rem;
  height: 50rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
