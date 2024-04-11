<script setup lang="ts">
import KsSkeletonLoading from "@/components/_common/KsSkeletonLoading.vue";
import KsButton from "@/components/_common/KsButton.vue";
</script>

<template>
  <div v-for="card in 5" :key="card" class="ks-card">
    <div class="plan-card px-4 py-3">
      <div class="ks-card-row">
        <div class="d-flex gap-1">
          <KsSkeletonLoading :row-height="12" :row-width="72" />
        </div>
        <span class="ks-card-title color-success">
          <KsSkeletonLoading :row-height="22" :row-width="100" />
        </span>
      </div>
      <div class="ks-card-row">
        <div class="d-flex flex-column">
          <small class="text-xxSmall fw-light"> قیمت </small>
          <KsSkeletonLoading :row-height="18" :row-width="72" />
        </div>
        <div class="d-flex flex-column text-end">
          <small class="text-xxSmall fw-light"> فعال تا </small>
          <KsSkeletonLoading :row-height="18" :row-width="52" />
        </div>
      </div>
    </div>
    <div class="plan-buy-button">
      <KsButton
        disabled
        theme="flat"
        color="primary"
        custom-padding="6px 16px"
        bold
        radius="square"
        title="خرید اشتراک"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.plan-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.plan-buy-button {
  overflow: hidden;
  border: {
    bottom-left-radius: 12px;
    bottom-right-radius: 12px;
  }
}
</style>
