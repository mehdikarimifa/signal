<script setup lang="ts">
import { useSignalStore } from "@/stores/signal";

import SignalLoading from "@/components/app/body/signal/SignalLoading.vue";
import SectionHeader from "@/components/app/SectionHeader.vue";
import SignalCard from "./SignalCard.vue";

const signalStore = useSignalStore();
</script>

<template>
  <div class="d-flex flex-column gap-2 gap-lg-3">
    <SectionHeader title="سیگنال های اخیر" />
    <SignalCard
      v-for="(signal, index) in signalStore.signalList"
      :key="index"
      :signal="signal"
      :expanded="index === 0" />
    <SignalLoading v-if="signalStore.isLoading" />
  </div>
</template>
