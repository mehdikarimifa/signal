<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";
import KsButton from "@/components/_common/KsButton.vue";
import KsInput from "@/components/_common/KsInput.vue";
import MenuDropDown from "./_shared/MenuDropDown.vue";

const themeStore = useThemeStore();
</script>

<template>
  <div class="desktop-header d-none d-lg-flex gap-4 px-4 align-items-center">
    <div class="d-flex align-items-center gap-4">
      <MenuDropDown />
      <BaseIcon
        name="Bell"
        size="18"
        class="mx-3"
        :color="themeStore.defaultIconColor" />
      <KsButton
        title="تمدید اشتراک"
        color="primary"
        custom-padding="6px 16px" />
    </div>
    <div class="flex-1 search-field">
      <KsInput placeholder="جستجوی سیگنال" custom-height="42" icon="left">
        <template #icon>
          <BaseIcon name="Search" />
        </template>
      </KsInput>
    </div>
  </div>
</template>

<style scoped lang="scss">
.desktop-header {
  height: 92px;
  align-items: center;
  justify-content: space-between;

  .search-field {
    max-width: 510px;
  }
}
</style>
