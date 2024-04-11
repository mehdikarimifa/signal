<script setup lang="ts">
import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";
import KsButton from "@/components/_common/KsButton.vue";

const isActive = true;
</script>

<template>
  <div
    :class="{ active: isActive }"
    class="plan-card unselectable-text"
    dir="rtl"
    @click="$router.push({ name: 'Plan' })">
    <div
      :class="isActive ? 'justify-content-between' : 'justify-content-center'"
      class="d-flex align-items-center">
      <span class="text-white text-large fw-bold pt-1"> اشتراک VIP 3 </span>
      <BaseIcon v-if="isActive" name="Crown" size="24" color="#ffffff" />
    </div>
    <div
      v-if="isActive"
      class="d-flex align-items-center justify-content-between">
      <span class="text-medium fw-bold text-white">
        800
        <small class="text-xxSmall text-white">روزه</small>
      </span>
      <span class="plan-days text-white">
        <small class="text-xxSmall text-white">باقی مانده</small>
        256
      </span>
    </div>
    <div v-else class="text-center" style="margin-top: -14px">
      <span class="fw-bold text-small text-white" dir="rtl">
        دریافت سینگال های ویژه با خرید اشتراک 😎👌
      </span>
      <KsButton color="secondary" class="mt-2">
        <template #content>
          <span class="text-dark fw-bold text-medium"> خرید اشتراک </span>
        </template>
      </KsButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.plan-card {
  background: rgba(var(--primary-dark));
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 16px 24px 48px 24px;

  &.active {
    background-image: linear-gradient(
      -145deg,
      rgba(var(--danger), 1) -80%,
      rgba(var(--secondary), 1) 120%
    );
  }

  .plan-days {
    font-size: 38px;
    font-weight: 900;
  }
}
</style>
