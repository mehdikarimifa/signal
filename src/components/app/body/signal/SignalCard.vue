<script setup lang="ts">
import type { PropType } from "vue";
import type Signal from "@/types/Signal";
import { computed, ref } from "vue";

import KsButton from "@/components/_common/KsButton.vue";

const props = defineProps({
  signal: {
    type: Object as PropType<Signal>,
    required: true,
  },
  expanded: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const isExpanded = ref(props.expanded);

const isSignalBuy = computed(() => {
  return props.signal.action === 1;
});

const isSignalActive = computed(() => {
  return props.signal.status === 1;
});

const getClasses = computed(() => {
  return "signal-" + (isSignalBuy.value ? "buy" : "sell");
});
</script>

<template>
  <div
    :class="getClasses"
    class="signal-card ks-card d-flex flex-column gap-2 cursor-pointer p-3"
    @click="isExpanded = !isExpanded">
    <div class="d-flex gap-3 align-items-center justify-content-between">
      <div class="flex-1 d-flex gap-2">
        <span class="signal-action unselectable-text">
          {{ isSignalBuy ? "خرید" : "فروش" }}
        </span>
      </div>
      <div class="text-center text-xSmall flex-1 d-flex flex-column gap-md-1">
        <span :class="isSignalActive ? 'color-primary' : 'opacity-50'">
          {{ isSignalActive ? "فعال" : "منقضی شده" }}
        </span>
        <span>
          {{ signal.trade_result }}
        </span>
      </div>
      <div class="flex-1 d-flex flex-column" dir="rtl">
        <span class="ks-card-title">{{ signal.title }}</span>
        <div class="text-small color-primary-light">2021/12/16</div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="isExpanded"
        @click.stop
        class="expanded d-flex flex-column gap-1">
        <hr class="border border-1" />
        <div class="expanded-row">
          <span> تاریخ ورود: </span>
          <span> 21/12/16 16:24 </span>
        </div>
        <div class="expanded-row">
          <span> قیمت ورود: </span>
          <span> 800 USDT </span>
        </div>
        <div class="expanded-row">
          <span> Stop Loss: </span>
          <span> 750 USDT </span>
        </div>
        <div class="expanded-row">
          <span> برداشت سود 1: </span>
          <span> 900 USDT </span>
        </div>
        <div class="expanded-row">
          <span> برداشت سود 2: </span>
          <span> 1000 USDT </span>
        </div>
        <KsButton
          title="مشاهده جزئیات"
          color="primary"
          theme="flat"
          class="mt-3"
          custom-padding="8px 0" />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.signal-card {
  .signal-action {
    width: 72px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    border-radius: 12px;

    &:hover {
      color: rgba(var(--white), 1) !important;
    }
  }

  &.signal- {
    &buy {
      border-right: 5px solid rgba(var(--success), 0.7);

      .signal-action {
        background: rgba(var(--success), 0.1);
        color: rgba(var(--success), 1);

        &:hover {
          background: rgba(var(--success), 1);
        }
      }
    }

    &sell {
      border-right: 5px solid rgba(var(--danger), 0.7);

      .signal-action {
        background: rgba(var(--danger), 0.1);
        color: rgba(var(--danger), 1);

        &:hover {
          background: rgba(var(--danger), 1);
        }
      }
    }
  }

  .expanded {
    .expanded-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      direction: rtl;
      gap: 3rem;
      padding: 8px 16px;
      border-radius: 6px;

      &:nth-child(odd) {
        background: rgba(var(--text-color), 0.05);
      }

      &:hover {
        background: rgba(var(--text-color), 0.02);
      }

      span {
        &:first-child {
          font-weight: 100;
          font-size: 16px;
        }

        &:last-child {
          font-weight: 400;
          font-size: 16px;
          text-align: end;
        }
      }
    }
  }

  .angle-icon {
    &.to-down {
      transform: rotate(-90deg);
    }
  }
}

@media screen and (max-width: 768px) {
  .signal-action {
    width: 52px !important;
    height: 38px !important;
    font-size: 12px !important;
  }

  .expanded-row {
    span {
      &:first-child {
        font-size: 12px !important;
      }

      &:last-child {
        font-size: 12px !important;
      }
    }
  }
}
</style>
