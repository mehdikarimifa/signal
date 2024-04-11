<script setup lang="ts">
const emits = defineEmits(["reachedBottom"]);

const onScroll = ({
  target: { scrollTop, clientHeight, scrollHeight },
}: any) => {
  if (scrollTop + clientHeight >= scrollHeight) {
    emits("reachedBottom");
  }
};
</script>

<template>
  <div class="scroll-view" dir="rtl" @scroll="onScroll">
    <div dir="ltr">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-view {
  overflow-y: auto;
  max-height: 100vh;
}
</style>
