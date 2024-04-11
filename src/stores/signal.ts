import type { Ref } from "vue";
import { ref } from "vue";
import type Signal from "@/types/Signal";
import { defineStore } from "pinia";

export const useSignalStore = defineStore("signal", () => {
  const signalList: Ref<Signal[]> = ref([]);
  const isLoading = ref(true);

  // TODO Remove when implemented api cals
  const data: Signal[] = [
    {
      id: 57,
      title: "SOL • USDT",
      action: 2,
      status: 1,
      trade_result: "برداشت سود 4",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
    {
      id: 58,
      title: "ADA • USDT",
      action: 1,
      status: 1,
      trade_result: "برداشت سود 1",
      type: 5,
      created_at: "2022-02-24T20:49:27.000000Z",
      updated_at: "2022-03-06T07:58:34.000000Z",
      created_at_2: "2022/02/25 00:19",
      updated_at_2: "2022/03/06 11:28",
    },
  ];

  const receiveSignalList = () => {
    isLoading.value = true;
    setTimeout(() => {
      signalList.value = data;
      isLoading.value = false;
    }, 1500);
  };

  return { signalList, isLoading, receiveSignalList };
});
