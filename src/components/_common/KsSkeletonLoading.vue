<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  rowNumber: {
    type: Number as PropType<number>,
    default: 1,
  },
  rowGap: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5>,
    default: 3,
    validator: (prop: number) => [1, 2, 3, 4, 5].includes(prop),
  },
  rowWidth: {
    type: Number as PropType<number>,
    default: null,
  },
  rowHeight: {
    type: Number as PropType<number>,
    default: 52,
  },
  backgroundColor: {
    type: String as PropType<string>,
    default: "#e5e5e5",
  },
});
</script>

<template>
  <div :class="'gap-' + rowGap" class="ks-skeleton d-flex flex-column">
    <div
      v-for="_ in rowNumber"
      :style="{
        height: rowHeight + 'px',
        width: rowWidth ? rowWidth + 'px' : '100%',
      }"
      class="item"
    />
  </div>
</template>

<style lang="scss" scoped>
.ks-skeleton {
  cursor: progress;

  .item {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background: rgba(var(--text-color), 0.15);

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background-image: linear-gradient(
        to left,
        transparent,
        rgba(var(--background-color), 0.5),
        transparent
      );
      animation: skeleton 800ms infinite;
    }
  }
}

@-webkit-keyframes skeleton {
  100% {
    transform: translateX(100%);
  }
}

@keyframes skeleton {
  100% {
    transform: translateX(100%);
  }
}
</style>
