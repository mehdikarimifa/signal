<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useThemeStore } from "@/stores/theme";

import SplashScreen from "@/components/app/SplashScreen.vue";
import UiElements from "@/components/app/UiElements.vue";

const { setThemeAttribute } = useThemeStore();
const splashScreenVisible = ref(true);

const removeSplashScreen = () => {
  setTimeout(() => {
    splashScreenVisible.value = false;
  }, 1500);
};

onMounted(() => {
  setThemeAttribute();
  removeSplashScreen();
});
</script>

<template>
  <div class="app-wrapper">
    <transition name="fade">
      <UiElements />
    </transition>
    <SplashScreen v-if="splashScreenVisible" />
    <router-view v-else class="app-router" />
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  background: rgba(var(--background-color), 1);
  min-height: 100vh;

  .app-router {
    position: relative;
  }
}
</style>
