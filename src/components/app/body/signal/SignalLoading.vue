<script setup lang="ts">
import KsSkeletonLoading from "@/components/_common/KsSkeletonLoading.vue";
import KsButton from "@/components/_common/KsButton.vue";
</script>

<template>
  <div
    v-for="row in 3"
    :key="row"
    class="ks-card d-flex flex-column gap-2 cursor-pointer p-3"
  >
    <div class="d-flex gap-3 align-items-center justify-content-between">
      <div class="flex-1 d-flex gap-2">
        <KsSkeletonLoading :row-height="38" :row-width="70" />
      </div>
      <div class="flex-1 d-flex flex-column align-items-center gap-1">
        <KsSkeletonLoading :row-height="18" :row-width="32" />
        <KsSkeletonLoading :row-height="18" :row-width="82" />
      </div>
      <div class="flex-1 d-flex flex-column gap-1" dir="rtl">
        <KsSkeletonLoading :row-height="24" :row-width="110" />
        <KsSkeletonLoading :row-height="18" :row-width="82" />
      </div>
    </div>
    <div v-if="row === 1" class="expanded d-flex flex-column gap-1">
      <hr />
      <div v-for="row in 5" :key="row">
        <KsSkeletonLoading :row-height="38" />
      </div>
      <KsButton
        disabled
        title="مشاهده جزئیات"
        color="primary"
        theme="flat"
        class="mt-3"
        custom-padding="8px 0"
      />
    </div>
  </div>
</template>
