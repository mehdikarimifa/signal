<script setup lang="ts">
import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";
import KsInput from "@/components/_common/KsInput.vue";
import ActivePlan from "./ActivePlan.vue";
</script>

<template>
  <div class="d-flex d-lg-none flex-column align-items-center mb-4">
    <ActivePlan class="w-100" />

    <div class="search-field">
      <KsInput placeholder="جستجوی سیگنال" custom-height="42" icon="left">
        <template #icon>
          <BaseIcon name="Search" />
        </template>
      </KsInput>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-field {
  width: 85%;
  //background: rgba(var(--header-background));
  box-shadow: 0 9px 52px 11px rgb(0 0 0 / 5%);
  margin-top: -24px;
}
</style>
