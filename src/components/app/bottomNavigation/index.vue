<script setup lang="ts">
import type { RouteLink } from "@/types/_common/RouteLink";
import { useThemeStore } from "@/stores/theme";

import BottomNavigationLink from "./BottomNavigationLink.vue";
import { Colors } from "@/assets/colors";
import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";

const footerLinks: RouteLink[] = [
  {
    title: "خانه",
    routeName: "Home",
    iconName: "Home",
  },
  {
    title: "اشتراک",
    routeName: "Plan",
    iconName: "ShoppingBag",
  },
  {
    title: "بلاگ",
    routeName: "Blog",
    iconName: "Blog",
  },
  {
    title: "پشتیبانی",
    routeName: "Ticket",
    iconName: "Message",
  },
];

const themeStore = useThemeStore();
</script>

<template>
  <div class="mobile-footer d-flex flex-row-reverse d-lg-none">
    <BottomNavigationLink
      v-for="(link, index) in footerLinks"
      :key="index"
      :footer-link="link">
      <BaseIcon
        :name="link.iconName"
        :color="
          link.routeName === $route.name
            ? Colors.primary
            : themeStore.defaultIconColor
        "
        :active="link.routeName === $route.name"
        size="18" />
    </BottomNavigationLink>
  </div>
</template>

<style scoped lang="scss">
.mobile-footer {
  height: 64px;
  background: rgba(var(--header-background), 1);
  box-shadow: 0 4px 23px 8px rgba(var(--black), 0.05);
  border: {
    top-left-radius: 22px;
    top-right-radius: 22px;
  }
  position: fixed;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
