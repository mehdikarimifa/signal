<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="section-header d-flex gap-5">
    <div class="section-header-horizontal-line" />
    <h1 class="section-header-title text-large unselectable-text">
      {{ title }}
    </h1>
  </div>
</template>

<style scoped lang="scss">
.section-header {
  align-items: center;

  .section-header-horizontal-line {
    flex: 1;
    height: 2px;
    background: rgba(var(--text-color), 0.06);
    border-radius: 4px;
  }

  .section-header-title {
    font-size: 28px;
    font-weight: 100;
  }
}
</style>
