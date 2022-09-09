<script setup lang="ts">
import { ref } from "vue";

const active = ref(false);
</script>

<template>
  <div class="show">
    <div
      class="status-bar"
      :class="{ active: active }"
      @click="active = !active"
    >
      <Icon class="icon icon-menu" icon="bytesize:menu" />
      <Icon class="icon icon-close" icon="clarity:window-close-line" />
    </div>
    <div class="article" :class="{ active: active }">
      <h1>
        Stop Using React, Vue, Svelte, Solid, Angular, Alpine… And Stop Using
        Vanilla JavaScript Too!
      </h1>
      <img
        src="https://miro.medium.com/max/1400/1*inHGcj4r4ZSy1FgVHr2cRg.jpeg"
        alt="Stop Using Everything!"
      />
      <p>Stop Using Everything!</p>
      <p class="content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure soluta
        voluptatem recusandae corporis, officiis mollitia autem! Repellat iusto
        quos animi, perspiciatis, accusantium maiores dolorem recusandae
        provident cupiditate eaque vero. Consectetur! Sed aliquam quas
        perspiciatis rem eius voluptate quae aliquid dicta doloremque iusto!
        Consequuntur, magni corporis blanditiis veritatis atque nesciunt.
        Perferendis enim amet delectus nesciunt ab impedit nemo magnam! Amet,
        alias. At voluptate repellendus, adipisci eum quaerat veniam nobis,
        vitae excepturi minima accusamus possimus tempora illo impedit provident
        autem repellat eius nihil ut ipsa commodi beatae. Soluta corporis sed
        fugit officiis.
      </p>
    </div>
    <nav class="nav" :class="{ active: active }">
      <div class="opreations">
        <div class="item">
          <Icon class="icon-sm" icon="bxs:home" color="white" /><span
            >Home</span
          >
        </div>
        <div class="item">
          <Icon
            class="icon-sm"
            icon="simple-icons:aboutdotme"
            color="white"
          /><span>About</span>
        </div>
        <div class="item">
          <Icon
            class="icon-sm"
            icon="healthicons:contact-support"
            color="white"
          /><span>Contact</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.show {
  position: relative;
  width: 80rem;
  height: 50rem;
  border: 1px solid #000;
  overflow: hidden;
}

.status-bar {
  position: absolute;
  z-index: 2;
  top: -6rem;
  left: -6rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background-color: #ec7272;
  transition: all 0.5s;
}

.status-bar.active {
  transform: rotateZ(90deg);
}

.icon {
  position: absolute;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
}

.icon-sm {
  font-size: 2rem;
}

.icon-menu {
  right: 2rem;
  bottom: 2rem;
}

.icon-close {
  right: 2rem;
  top: 2rem;
}

.article {
  position: absolute;
  z-index: 1;

  width: 100%;
  height: 50rem;

  background-color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 5rem;

  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  transform-origin: top left;
}

.article.active {
  height: auto;
  transform: rotateZ(-25deg);
}

.article img {
  width: 30rem;
  object-fit: cover;
  border-radius: 5px;
}

.article h1 {
  text-align: center;
}

.article .content {
  font-size: 1.6rem;
  line-height: 1.6;
}

.nav {
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: #16213e;
}

.opreations {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem 3rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: all 0.5s;
}

.item:first-child {
  transition-delay: 0s;
}

.item:nth-child(2) {
  transition-delay: 0.3s;
}

.item:nth-child(3) {
  transition-delay: 0.6s;
}

.nav.active .item:first-child {
  opacity: 1;
  transform: translateX(0);
}

.nav.active .item:nth-child(2) {
  opacity: 1; 
  transform: translateX(1.5rem);
}

.nav.active .item:nth-child(3) {
  opacity: 1;
  transform: translateX(3rem);
}

.item span {
  font-size: 1.4rem;
}
</style>
