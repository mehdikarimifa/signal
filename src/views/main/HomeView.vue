<script setup lang="ts">
import { onMounted } from "vue";
import { useSignalStore } from "@/stores/signal";

import ScrollView from "@/components/app/ScrollView.vue";
import SignalList from "@/components/app/body/signal/SignalList.vue";
import MobileHeader from "@/components/app/body/signal/SignalMobileHeader/index.vue";

const { receiveSignalList } = useSignalStore();

onMounted(() => {
  receiveSignalList();
});
</script>

<template>
  <ScrollView>
    <MobileHeader />
    <SignalList />
  </ScrollView>
</template>
