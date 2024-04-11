<script setup lang="ts">
import type { PropType } from "vue";
import type { _Icon } from "@/types/_common/_Icon";
import { defineAsyncComponent } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#000000",
  },
  size: {
    type: String,
    default: "18",
  },
  active: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String as PropType<_Icon>,
    required: true,
  },
});

const getIconComponent = defineAsyncComponent(() => {
  const component = `./icons/${props.name}Icon.vue`;
  return import(/* @vite-ignore */ component);
});
</script>

<template>
  <component
    :is="getIconComponent"
    :fill="color"
    :width="size"
    :active="active"
  />
</template>
