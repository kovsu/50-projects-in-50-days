<script setup lang="ts">
import { ref } from "vue";

let step = ref(1);
const limit = 5;

function prev() {
  if (step.value > 0) {
    step.value--;
  }
}

function next() {
  if (step.value < 5) {
    step.value++;
  }
}
</script>

<template>
  <div class="show">
    <div class="progress">
      <div class="item" v-for="i = 1 in limit" :class="{ active: step >= i }">
        {{ i }}
      </div>
    </div>
    <div class="operations">
      <button class="btn" @click="prev" :disabled="step === 1">Prev</button>
      <button class="btn" @click="next" :disabled="step === limit">Next</button>
    </div>
  </div>
</template>

<style scoped>
.show {
  width: 80rem;
  height: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

.operations {
  display: flex;
  gap: 2rem;
}

.btn {
  border: none;
  background-color: #e94560;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.4rem;
  color: #fff;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.progress {
  display: flex;
  gap: 10rem;
}

.item {
  position: relative;
  width: 5rem;
  height: 5rem;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: gray;
  border: 2px solid rgba(128, 128, 128, 0.5);
  transition: all 0.5s;
}

.item:not(:first-child)::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 10rem;
  height: 3px;
  background-color: rgba(128, 128, 128, 0.5);
  left: -10.2rem;
  transition: all 0.5s;
}

.item.active {
  border-color: #e94560;
  color: #e94560;
}

.item.active::after {
  background-color: #e94560;
}
</style>
