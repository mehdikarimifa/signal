<script setup lang="ts">
import MenuDropDown from "./_shared/MenuDropDown.vue";
</script>

<template>
  <div class="mobile-header d-flex d-lg-none px-4">
    <MenuDropDown />
    <span class="h6">
      App Name
    </span>
  </div>
</template>

<style scoped lang="scss">
.mobile-header {
  height: 58px;
  background: rgba(var(--header-background), 1);
  box-shadow: 0 4px 23px 8px rgba(var(--black), 0.02);
  align-items: center;
  justify-content: space-between;
}
</style>
