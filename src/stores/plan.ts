import type { Ref } from "vue";
import { ref } from "vue";
import type Plan from "@/types/Plan";
import { defineStore } from "pinia";

export const usePlanStore = defineStore("plan", () => {
  const planList: Ref<Plan[]> = ref([]);
  const isLoading = ref(true);

  // TODO Remove when implemented api cals
  const data: Plan[] = [
    {
      id: 38,
      days: 120,
      price: 9,
      title: "VIP 3",
    },
    {
      id: 35,
      days: 82,
      price: 9,
      title: "VIP 2",
    },
    {
      id: 31,
      days: 30,
      price: 9,
      title: "VIP 1",
    },
  ];

  const receivePlanList = () => {
    isLoading.value = true;
    setTimeout(() => {
      planList.value = data;
      isLoading.value = false;
    }, 1500);
  };

  return { planList, isLoading, receivePlanList };
});
