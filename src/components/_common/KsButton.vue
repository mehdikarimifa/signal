<script lang="ts" setup>
import type { _Color } from "@/types/_common/_Color";
import type { ComputedRef, PropType, Ref, StyleValue } from "vue";
import { computed, ref } from "vue";

const props = defineProps({
  title: {
    type: String as PropType<string>,
  },
  tooltip: {
    type: String as PropType<string>,
    default: null,
  },
  theme: {
    type: String as PropType<"modern" | "flat">,
    default: "modern",
    validator: (prop: string) => ["modern", "flat"].includes(prop),
  },
  color: {
    type: String as PropType<_Color>,
    default: "secondary",
    validator: (prop: string) =>
      [
        "secondary",
        "primary",
        "warn",
        "danger",
        "success",
        "dark",
        "white",
        "transparent",
      ].includes(prop),
  },
  size: {
    type: String as PropType<"mini" | "small" | "medium" | "large">,
    default: "small",
    validator: (prop: string) =>
      ["mini", "small", "medium", "large"].includes(prop),
  },
  btnBlock: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  radius: {
    type: String as PropType<"round" | "circle" | "square">,
    default: "round",
    validator: (prop: string) => ["round", "circle", "square"].includes(prop),
  },
  bold: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  fixedWidthHeight: {
    type: [String, null] as PropType<string>,
    default: null,
  },
  active: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  customPadding: {
    type: String as PropType<string>,
    default: null,
  },
  hasDropDownMenu: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  menuDirection: {
    type: String as PropType<"center" | "left" | "right">,
    default: "center",
  },
});

const emits = defineEmits(["click"]);

const menuVisible = ref(false);
const ksDropDownMenu: Ref<HTMLDivElement | null> = ref(null);
const fixedWidthHeightStyles: ComputedRef<StyleValue | undefined> = computed(
  () => {
    if (props.fixedWidthHeight)
      return (
        "width:" +
        props.fixedWidthHeight +
        "px;" +
        "height:" +
        props.fixedWidthHeight +
        "px;" +
        "padding: 0"
      );
  }
);

function onBtnClick() {
  emits("click");
  menuVisible.value = !menuVisible.value;
}

const onButtonFocusOut = () => {
  if (ksDropDownMenu.value) ksDropDownMenu.value.style.opacity = "0";
  setTimeout(() => {
    menuVisible.value = false;
    if (ksDropDownMenu.value) ksDropDownMenu.value.style.opacity = "1";
  }, 500);
};

const getClasses: ComputedRef<string> = computed(() => {
  let classes = `${props.theme} ${props.color} ${props.size} ${props.radius}`;
  !!props.bold && (classes += " fw-bold");
  !!props.btnBlock && (classes += " w-100");
  return classes;
});
</script>

<template>
  <div :style="fixedWidthHeightStyles" class="ks-button">
    <button
      :class="[
        getClasses,
        loading && 'opacity-10',
        disabled && 'opacity-50',
        { active: active },
        fixedWidthHeight ? 'h-100' : !customPadding && 'ks-button-padding',
      ]"
      :disabled="disabled || loading"
      :style="customPadding && 'padding: ' + customPadding"
      class="IRANYekan w-100"
      tabindex="0"
      @click="onBtnClick"
      @focusout="onButtonFocusOut"
    >
      <slot name="content">{{ title }}</slot>
    </button>
    <div
      ref="ksDropDownMenu"
      :class="'menu-dir-' + menuDirection"
      class="ks-dropdown-menu-wrapper"
    >
      <div v-if="menuVisible && hasDropDownMenu" class="ks-dropdown-menu">
        <slot name="dropdown-menu" />
      </div>
    </div>

    <div
      v-if="tooltip"
      class="ks-tooltip text-xSmall IRANYekan no-pointer-event"
    >
      {{ tooltip }}
    </div>

    <div v-if="loading" class="custom-loader center" />
  </div>
</template>

<style lang="scss">
.ks-button {
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .modern,
  .flat {
    border: none;
    outline: none;
  }

  .ks-button-padding {
    padding: 8px 18px;
  }

  // radius
  .circle {
    border-radius: 999px;
  }

  .square {
    border-radius: 0;
  }

  .round {
    border-radius: 8px;
  }

  // tooltip
  .ks-tooltip {
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    .ks-tooltip {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  // color
  .flat {
    &:focus,
    &.active {
      svg {
        fill: rgba(var(--white), 1) !important;
        stroke: rgba(var(--white), 1) !important;

        line {
          stroke: rgba(var(--white), 1) !important;
        }
      }
    }

    &.secondary {
      color: rgba(var(--secondary), 1);
      background: rgba(var(--secondary), 0.1);

      &:hover {
        background: rgba(var(--secondary), 0.2);
      }

      &:focus {
        background: rgba(var(--secondary), 1);
        color: rgba(var(--white), 1);
      }
    }

    &.primary {
      color: rgba(var(--primary), 1);
      background: rgba(var(--primary), 0.1);

      &:hover {
        background: rgba(var(--primary), 0.2);
      }

      &:focus {
        background: rgba(var(--primary), 1);
        color: rgba(var(--white), 1);
      }
    }

    &.warn {
      color: rgba(var(--warn), 1);
      background: rgba(var(--warn), 0.2);

      &:hover {
        background: rgba(var(--warn), 0.3);
      }

      &:focus {
        background: rgba(var(--warn), 1);
        color: rgba(var(--white), 1);
      }
    }

    &.danger {
      color: rgba(var(--danger), 1);
      background: rgba(var(--danger), 0.1);

      &:hover {
        background: rgba(var(--danger), 0.2);
      }

      &:focus {
        background: rgba(var(--danger), 1);
        color: rgba(var(--white), 1);
      }
    }

    &.success {
      color: rgba(var(--success), 1);
      background: rgba(var(--success), 0.1);

      &:hover {
        background: rgba(var(--success), 0.2);
      }

      &:focus {
        background: rgba(var(--success), 1);
        color: rgba(var(--white), 1);
      }
    }

    &.dark {
      color: rgba(var(--text-color), 1);
      background: rgba(var(--text-color), 0.05);

      svg path {
        fill: rgba(var(--text-color), 1) !important;
      }

      &:hover {
        background: rgba(var(--black), 0.2);
      }

      &:focus {
        background: rgba(var(--black), 1);
        color: rgba(var(--white), 1);

        svg path {
          fill: rgba(var(--white), 1) !important;
        }
      }
    }
  }

  .modern,
  .flat.active {
    &.primary {
      background: rgba(var(--primary), 1);

      &:hover {
        box-shadow: 0 4px 9px 2px rgba(var(--primary), 0.3);
      }
    }

    &.warn {
      background: rgba(var(--warn), 1);

      &:hover {
        box-shadow: 0 4px 9px 2px rgba(var(--warn), 0.3);
      }
    }

    &.danger {
      background: rgba(var(--danger), 1);

      &:hover {
        box-shadow: 0 4px 9px 2px rgba(var(--danger), 0.3);
      }
    }

    &.success {
      background: rgba(var(--success), 1);

      &:hover {
        box-shadow: 0 4px 9px 2px rgba(var(--success), 0.3);
      }
    }

    &.dark {
      background: rgba(var(--black), 1);

      * {
        color: rgb(var(--white));
      }

      &:hover {
        box-shadow: 0 4px 9px 2px rgba(var(--black), 0.3);
      }
    }

    &.white {
      background: rgba(var(--white), 1);
      color: rgba(var(--primary), 1);

      &:hover {
        box-shadow: 0 4px 9px 2px rgba(var(--black), 0.05);
      }
    }

    &.secondary {
      background: rgba(var(--secondary), 1);

      &:hover {
        box-shadow: 0 4px 9px 2px rgba(var(--secondary), 0.3);
      }
    }

    &.primary,
    &.warn,
    &.danger,
    &.success,
    &.dark,
    &.secondary {
      color: rgba(var(--white), 1);
    }
  }

  .transparent {
    background: transparent;
    color: rgb(var(--text-color));
  }

  .mini {
    font-size: 10px;
  }

  .small {
    font-size: 12px;
  }

  .medium {
    font-size: 14px;
  }

  .large {
    font-size: 16px;
  }

  .ks-dropdown-menu-wrapper {
    position: absolute;
    top: 48px;
    z-index: 99999;

    &.menu-dir-center {
      left: 50%;
      transform: translateX(-50%);

      .ks-dropdown-menu:after {
        left: 20px;
        transform: rotate(180deg);
      }
    }

    &.menu-dir-right {
      right: 0;

      .ks-dropdown-menu:after {
        right: 8px;
      }
    }

    &.menu-dir-left {
      left: 0;

      .ks-dropdown-menu:after {
        left: 8px;
      }
    }

    .ks-dropdown-menu {
      background: rgb(var(--background-color)) !important;
      border-radius: 12px;
      min-width: 180px;
      box-shadow: 3px 3px 10px 0 rgba(var(--text-color), 0.03);

      ul {
        list-style: none;
        padding: 8px 0;
        margin: 0;

        li {
          cursor: pointer;
          padding: 8px 16px;

          span {
            color: rgb(var(--text-color)) !important;
          }

          &:hover {
            background: rgba(var(--text-color), 0.05);
          }
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: -8px;
        transform: rotate(180deg);
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom: none;
        border-top-color: rgb(var(--background-color));
        vertical-align: middle;
        display: inline-block;
      }
    }
  }
}
</style>
