<script setup lang="ts">
import type { PropType } from "vue";
import type Plan from "@/types/Plan";

import KsButton from "@/components/_common/KsButton.vue";
import BaseIcon from "@/components/_common/BaseIcon/BaseIcon.vue";
import { Colors } from "@/assets/colors";

const props = defineProps({
  plan: {
    type: Object as PropType<Plan>,
    required: true,
  },
});
</script>

<template>
  <div class="ks-card">
    <div class="plan-card px-4 py-3">
      <div class="ks-card-row">
        <div class="d-flex gap-1">
          <BaseIcon
            v-for="(_, index) in 4"
            :key="index"
            name="Star"
            size="12"
            :color="Colors.warn"
          />
        </div>
        <span class="ks-card-title color-success">
          {{ plan.title }}
        </span>
      </div>
      <div class="ks-card-row">
        <div class="d-flex flex-column">
          <small class="text-xxSmall fw-light"> قیمت </small>
          <span class="fw-bold">
            {{ plan.price }}
            <span class="text-xxSmall">USDT</span>
          </span>
        </div>
        <div class="d-flex flex-column text-end">
          <small class="text-xxSmall fw-light"> فعال تا </small>
          <span dir="rtl" class="fw-bold">
            {{ plan.days }}
            <span class="text-xxSmall">روز</span>
          </span>
        </div>
      </div>
    </div>
    <div class="plan-buy-button">
      <KsButton
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
  gap: 0.5rem;
}

.plan-buy-button {
  overflow: hidden;
  border: {
    bottom-left-radius: 12px;
    bottom-right-radius: 12px;
  }
}
</style>
