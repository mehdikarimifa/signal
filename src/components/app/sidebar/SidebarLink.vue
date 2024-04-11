<script setup lang="ts">
import type { RouteLink } from "@/types/_common/RouteLink";
import type { PropType } from "vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  sidebarLink: {
    type: Object as PropType<RouteLink>,
    required: true,
  },
});

const route = useRoute();
const router = useRouter();

const isActive = computed(() => {
  return route.name === props.sidebarLink.routeName;
});

const onLinkClick = () => {
  router.push({ name: props.sidebarLink.routeName });
};
</script>

<template>
  <div
    :class="{ active: isActive }"
    class="sidebar-link cursor-pointer d-flex gap-4 py-1 px-4"
    @click="onLinkClick">
    <span class="sidebar-link-title pt-1 unselectable-text">
      {{ sidebarLink.title }}
    </span>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.sidebar-link {
  width: 100%;
  align-items: center;
  justify-content: end;

  &:hover {
    transform: translateX(-8px);
  }

  &.active {
    .sidebar-link-title {
      color: rgba(var(--primary), 1);
      font-weight: bold;
    }
  }

  .sidebar-link-title {
  }
}
</style>
