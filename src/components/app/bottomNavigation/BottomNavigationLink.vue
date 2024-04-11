<script setup lang="ts">
import type { RouteLink } from "@/types/_common/RouteLink";
import type { PropType } from "vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  footerLink: {
    type: Object as PropType<RouteLink>,
    required: true,
  },
});

const route = useRoute();
const router = useRouter();

const isActive = computed(() => {
  return route.name === props.footerLink.routeName;
});

const onLinkClick = () => {
  router.push({ name: props.footerLink.routeName });
};
</script>

<template>
  <div
    :class="{ active: isActive }"
    class="bottom-navigation cursor-pointer d-flex gap-2 align-items-center"
    @click="onLinkClick">
    <span class="bottom-navigation-title pt-1">
      {{ footerLink.title }}
    </span>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.bottom-navigation {
  padding: 12px 24px;

  &.active {
    padding: 8px 18px;
    border-radius: 999px;
    background: rgba(var(--primary), 0.1);

    .bottom-navigation-title {
      display: block;
    }
  }

  .bottom-navigation-title {
    display: none;
    font-size: 14px;
    font-weight: bold;
    color: rgba(var(--primary), 1);
  }
}
</style>
