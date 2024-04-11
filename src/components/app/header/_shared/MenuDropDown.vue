<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { computed } from "vue";

import KsButton from "@/components/_common/KsButton.vue";
import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";
import { Colors } from "@/assets/colors";

const themeStore = useThemeStore();
const { toggleThemeMode } = useThemeStore();

const isThemeLight = computed(() => {
  return themeStore.themeMode === "light";
});
</script>

<template>
  <KsButton
    color="dark"
    theme="flat"
    fixed-width-height="34"
    menu-direction="left"
    has-drop-down-menu>
    <template #content>
      <BaseIcon
        name="EllipsisVertical"
        size="26"
        :color="themeStore.defaultIconColor" />
    </template>
    <template #dropdown-menu>
      <ul class="list-unstyled text-end">
        <li @click="toggleThemeMode()">
          <div
            v-if="isThemeLight"
            class="d-flex align-items-center justify-content-end gap-3">
            <span class="link-text"> تاریک </span>
            <BaseIcon name="Moon" :color="Colors.primaryLight" size="18" />
          </div>
          <div
            v-else
            class="d-flex align-items-center justify-content-end gap-3">
            <span class="link-text"> روشن </span>
            <BaseIcon name="Sun" :color="Colors.warn" size="18" />
          </div>
        </li>
        <li class="link-text">
          <span class="px-2"> تراکنش ها </span>
          <BaseIcon
            name="ShoppingBag"
            size="18"
            :color="themeStore.defaultIconColor" />
        </li>
        <li class="link-text">
          <span class="px-2 color-danger"> خروج </span>
          <BaseIcon
            name="PowerOff"
            size="18"
            :color="themeStore.defaultIconColor" />
        </li>
      </ul>
    </template>
  </KsButton>
</template>
<style scoped>
.link-text {
  font-size: 14px;
}
</style>
