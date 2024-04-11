<script setup lang="ts">
import { usePlanStore } from "@/stores/plan";

import PlanLoading from "@/components/app/body/plan/PlanLoading.vue";
import SectionHeader from "@/components/app/SectionHeader.vue";
import PlanCard from "@/components/app/body/plan/PlanCard.vue";

const planStore = usePlanStore();
</script>

<template>
  <div class="d-flex flex-column gap-2 gap-lg-3">
    <SectionHeader title="اشتراک ها" />
    <PlanLoading v-if="planStore.isLoading" />
    <PlanCard
      v-for="(plan, index) in planStore.planList"
      :key="index"
      :plan="plan"
    />
  </div>
</template>
