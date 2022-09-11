<script setup lang="ts">
import { ref, watch } from "vue";

let blur = ref(100);

let timer = setInterval(() => {
  blur.value--;
}, 50);

watch(blur, () => {
  if (blur.value === 0) {
    clearInterval(timer);
  }
});
</script>

<template>
  <p v-if="blur !== 0">{{ blur }} %</p>
  <div
    class="show"
    :style="{
      filter: `blur(${blur}px)`,
    }"
  >
    <img
      class="img"
      :class="{ active: blur === 0 }"
      src="https://images.unsplash.com/photo-1662515248031-145d4fad2c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      alt=""
    />
  </div>
</template>

<style scoped>
.show {
  width: 80rem;
  height: 50rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;
  color: #000;
  font-size: 3.6rem;
}

.img {
  height: 300px;
  object-fit: cover;
  transition: all 0.8s 0.3s;
  transform: scale(0.8);
}

.img.active {
  transform: scale(1);
}
</style>
