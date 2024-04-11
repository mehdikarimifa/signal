<script setup lang="ts">
import { computed } from "vue";

import MaskedTextBackgroundImage from "@/assets/img/splash-screen-mask.jpg";

const maskedTextBackground = computed(() => {
  return `url(${MaskedTextBackgroundImage})`;
});
</script>

<template>
  <div class="splash-screen d-flex flex-column gap-3">
    <h1 class="masked-text unselectable-text">مهدی کریمی</h1>
    <span class="text-large fw-light"> سیگنال خرید و فروش ارزهای دیجیتال </span>
    <div class="position-relative mt-5">
      <div class="custom-loader white center p-3" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.splash-screen {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  place-content: center;
  place-items: center;

  .masked-text {
    background: v-bind(maskedTextBackground);
    background-size: 200% auto;
    color: #000;
    font-size: 82px;
    font-weight: 900 !important;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: moving-gradient 4s linear infinite;
    @keyframes moving-gradient {
      to {
        background-position: 200% center;
      }
    }
  }
}
</style>
