<script setup lang="ts">
import BottomNavigation from "@/components/app/bottomNavigation/index.vue";
import AppHeader from "@/components/app/header/index.vue";
import Sidebar from "@/components/app/sidebar/index.vue";
</script>

<template>
  <div class="d-flex gap-4">
    <div class="d-flex flex-column flex-1">
      <AppHeader />
      <router-view
        v-slot="{ Component, route }"
        class="main-router flex-1 px-4 pt-4">
        <transition mode="out-in" name="fade">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
      <BottomNavigation />
    </div>
    <Sidebar />
  </div>
</template>

<style scoped lang="scss">
.main-router {
  padding-bottom: 172px;
}
</style>
