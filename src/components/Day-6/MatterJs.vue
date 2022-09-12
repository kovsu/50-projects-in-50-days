<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import Matter from "matter-js";

const { Engine, Render, Composite, Bodies, Runner, Collision } = Matter;

let fn = reactive<{
  add?: () => void;
}>({});

onMounted(() => {
  const webgl = document.querySelector(".webgl") as HTMLDivElement;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
    element: webgl,
    engine: engine,
    options: {
      width: webgl.clientWidth,
      height: webgl.clientHeight,
      background: "#ffffff",
      // 关闭这个就允许使用 background 了
      wireframes: false,
      // @ts-expect-error untyped
      // 目的：让 canvas 更加清晰
      // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio
      pixelRatio: "auto",
    },
  });

  const wireframe = {
    fillStyle: "transparent",
    strokeStyle: "black",
    lineWidth: 1,
  };

  // create two boxes and a ground
  var box = Bodies.rectangle(450, 50, 80, 80, {
    isStatic: false,
    render: wireframe,
  });

  var ground = Bodies.rectangle(700, 310, 500, 60, {
    isStatic: true,
    render: wireframe,
  });

  // 添加 东西进入 canvas
  Composite.add(engine.world, [box, ground]);

  fn.add = () => {
    var box = Bodies.rectangle(450, 50, 80, 80, {
      isStatic: false,
      render: wireframe,
    });
    Composite.add(engine.world, box);
  };

  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);
});
</script>

<template>
  <div class="webgl" @click="fn.add"></div>
</template>

<style scoped>
.webgl {
  width: 80rem;
  height: 50rem;
  overflow: hidden;
  border: 1px solid #000;
}

.canvas {
  width: 100%;
  height: 100%;
}
</style>
