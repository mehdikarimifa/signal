<script setup lang="ts">
import { onMounted } from "vue";
import { usePlanStore } from "@/stores/plan";

import ScrollView from "@/components/app/ScrollView.vue";
import PlanList from "@/components/app/body/plan/PlanList.vue";

onMounted(() => {
  usePlanStore().receivePlanList();
});
</script>

<template>
  <ScrollView>
    <PlanList />
  </ScrollView>
</template>
