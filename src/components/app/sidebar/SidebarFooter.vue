<script setup lang="ts">
import KsButton from "@/components/_common/KsButton.vue";
import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";
import { Colors } from "@/assets/colors";

const isActive = true;
</script>

<template>
  <div class="p-4 text-center d-flex flex-column gap-2">
    <span v-if="!isActive" class="fw-bold text-xxSmall" dir="rtl">
      دریافت سینگال های ویژه با خرید اشتراک 😎👌
    </span>
    <div
      :class="{ active: isActive }"
      class="sidebar-footer d-flex flex-column gap-3 align-items-center"
      dir="rtl"
    >
      <div v-if="isActive" class="crown-icon px-1">
        <BaseIcon name="Crown" size="26" :color="Colors.secondary" />
        <span class="pt-1 text-dark fw-bold">
          800
          <small class="text-xSmall text-dark fw-light">روزه</small>
        </span>
      </div>
      <span class="text-medium fw-bold text-white">اشتراک VIP3</span>
      <strong v-if="isActive" class="plan-days">
        <span class="text-white">256</span>
        <small class="text-white fw-light"> روز باقی مانده </small>
      </strong>
      <KsButton v-else color="white" @click="$router.push({ name: 'Plan' })">
        <template #content>
          <span class="text-dark fw-bold text-medium"> خرید اشتراک </span>
        </template>
      </KsButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-footer {
  background: rgba(var(--primary-dark));
  border-radius: 16px;
  padding: 16px 0;

  &.active {
    background-image: linear-gradient(
      -145deg,
      rgba(var(--danger), 1) -80%,
      rgba(var(--secondary), 1) 120%
    );
  }

  .crown-icon {
    width: 80%;
    height: 52px;
    background: rgba(var(--white), 1);
    margin-top: -38px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border-radius: 14px;
    box-shadow: 0 -4px 24px 2px rgba(var(--text-color), 0.1);
  }

  .plan-days {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 48px;
    gap: 0.2rem;

    small {
      font-size: 11px;
    }
  }
}
</style>
