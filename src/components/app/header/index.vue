<script setup lang="ts">
import DesktopHeader from "./DesktopHeader.vue";
import MobileHeader from "./MobileHeader.vue";
</script>

<template>
  <div class="header-wrapper">
    <DesktopHeader />
    <MobileHeader />
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>
