<script lang="ts" setup>
import type { RouteLink } from "@/types/_common/RouteLink";
import { useThemeStore } from "@/stores/theme";

import SidebarFooter from "@/components/app/sidebar/SidebarFooter.vue";
import SidebarLink from "@/components/app/sidebar/SidebarLink.vue";
import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";
import { Colors } from "@/assets/colors";

const links: RouteLink[] = [
  {
    title: "خانه",
    routeName: "Home",
    iconName: "Home",
  },
  {
    title: "🔥 اشتراک ها",
    routeName: "Plan",
    iconName: "ShoppingBag",
  },
  {
    title: "وبلاگ",
    routeName: "Blog",
    iconName: "Blog",
  },
  {
    title: "پشتیبانی",
    routeName: "Ticket",
    iconName: "Message",
  },
  {
    title: "تراکنش ها",
    routeName: "Activity",
    iconName: "Activity",
  },
];

const themeStore = useThemeStore();
</script>

<template>
  <div class="sidebar d-none d-lg-flex gap-4 pt-5">
    <div class="d-flex flex-column gap-5 flex-1">
      <div class="sidebar-logo px-5">
        <span class="h2">App Name</span>
      </div>
      <div class="d-flex flex-column">
        <div v-for="(link, index) in links" :key="index">
          <SidebarLink :sidebar-link="link">
            <BaseIcon
              :active="link.routeName === $route.name"
              :color="
                link.routeName === $route.name
                  ? Colors.primary
                  : themeStore.defaultIconColor
              "
              :name="link.iconName"
              size="22" />
          </SidebarLink>
          <hr v-if="index !== links.length - 1" class="opacity-0" />
        </div>
      </div>
    </div>
    <SidebarFooter />
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: sticky;
  justify-content: center;
  flex-direction: column;
  right: 0;
  top: 0;
  width: 256px;
  height: 100vh;
  overflow-y: auto;
  background: rgba(var(--header-background), 1);
  box-shadow: 1px 1px 16px rgba(var(--text-color), 0.05);
  border-left: 2px solid rgba(var(--text-color), 0.02);

  .sidebar-logo {
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
