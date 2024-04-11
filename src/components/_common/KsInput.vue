<script lang="ts" setup>
import type { PropType } from "vue";

import KsButton from "@/components/_common/KsButton.vue";

defineProps({
  inputId: {
    type: String as PropType<string>,
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  readonly: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  appendText: {
    type: String as PropType<string>,
  },
  ltr: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  textAlign: {
    type: String as PropType<"end" | "start">,
    default: "end",
  },
  icon: {
    type: String as PropType<"right" | "left">,
    validator: (prop: string) => ["right", "left", null].includes(prop),
    default: null,
  },
  isDisabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  customHeight: {
    type: String as PropType<string>,
    default: null,
  },
});

const emit = defineEmits(["change", "update:modelValue", "blur"]);

function onInputChange(event: Event) {
  emit("change");
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div
    :class="[ltr ? 'ltr' : 'rtl', icon !== null && 'icon-' + icon]"
    :dir="ltr ? 'ltr' : 'rtl'"
    class="ks-input"
  >
    <div
      :class="[
        appendText && 'input-group',
        ltr ? 'ltr-input' : 'rtl-input',
        { 'opacity-75': isDisabled },
      ]"
      class="d-flex align-items-end"
    >
      <div class="d-flex flex-column gap-2 flex-1">
        <input
          ref="input"
          :dir="textAlign === 'start' ? 'ltr' : 'rtl'"
          :disabled="loading || isDisabled"
          :readonly="loading || readonly || isDisabled"
          :style="customHeight && { height: customHeight + 'px' }"
          :value="modelValue"
          class="color-primary form-control"
          v-bind="$attrs"
          @change="emit('blur')"
          @input="onInputChange"
        />
      </div>

      <div
        v-if="loading"
        :class="ltr ? 'right' : 'left'"
        class="custom-loader"
      />

      <KsButton
        v-if="icon"
        fixed-width-height="42"
        color="dark"
        theme="flat"
        class="ks-input-icon"
      >
        <template #content>
          <slot name="icon" />
        </template>
      </KsButton>

      <div
        v-if="appendText"
        :dir="ltr ? 'ltr' : 'rtl'"
        class="input-group-append"
      >
        <span class="input-group-text fw-bold">
          {{ appendText }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ks-input {
  position: relative;

  textarea,
  input,
  .ks-select {
    border: 2px solid transparent;
    width: 100%;
    background: rgba(var(--header-background), 1);
    color: rgba(var(--input-color));
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    font-size: 14px;
    border-radius: 12px;
    position: relative;
    font-family: IRANYekan;

    &::placeholder {
      color: rgba(var(--input-label));
      font-size: 13px;
      font-weight: lighter;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  textarea {
    padding: 14px 16px;

    &:focus {
      outline: none;
      box-shadow: none !important;
      background: rgba(var(--header-background), 1) !important;
      border: 2px solid transparent;
    }

    ~ .custom-loader {
      top: 18px;
    }
  }

  &:hover {
    input,
    textarea {
      background: rgba(var(--header-background), 1);
      border: 2px solid transparent;
      box-shadow: 5px 5px 25px 2px rgba(0, 0, 0, 0.05);
    }
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button,
    &[type="number"] {
      -webkit-appearance: none;
      margin: 0;
      -moz-appearance: textfield;
    }
  }

  input {
    padding: 7px 18px;

    &:focus {
      outline: none;
      background: rgba(var(--header-background));
      box-shadow: none !important;
      border: 2px solid rgba(var(--text-color), 0.1) !important;
      color: rgba(var(--input-color));

      + .ks-input-icon {
        top: -3px;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);
      }
    }

    ~ .custom-loader {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  input,
  .ks-select {
    height: 48px;
  }

  .form-control {
    &:disabled,
    &[readonly] {
      background: rgba(var(--input-background));
    }
  }

  .custom-loader {
    position: absolute;
  }

  .ks-options {
    &.open-upside {
      top: auto;
      bottom: 100%;
    }

    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 48px;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background: rgba(var(--input-background-dropdown), 1);
    border: none;
    transition: all 300ms ease;
    z-index: 99999;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 9px 52px 11px rgb(0 0 0 / 5%);

    &::-webkit-scrollbar {
      width: 5px;
    }

    button {
      width: 100%;
      text-align: right;
      padding: 12px 16px;
      background: transparent;
      outline: none;
      box-shadow: none;
      border: none;
      display: flex;
      align-items: center;

      &:hover,
      .active {
        background: rgba(var(--input-background-focus), 1);
      }
    }
  }

  .counter {
    position: absolute;
    color: #7591a0;
    bottom: 12px;
    font-size: 11px;
  }

  &.rtl {
    .ks-select {
      .angle-icon {
        left: 18px;
      }
    }

    .ks-options {
      button {
        text-align: right;
      }
    }

    .counter {
      left: 12px;
    }
  }

  &.ltr {
    .ks-select {
      .angle-icon {
        right: 18px;
      }
    }

    .ks-options {
      button {
        text-align: left;
      }
    }

    .counter {
      right: 12px;
    }
  }

  .ks-select {
    input,
    input:focus,
    input:hover {
      border: none !important;
      box-shadow: none !important;
    }

    &:focus .ks-options,
    .search-input:focus ~ .ks-options {
      visibility: visible;
      opacity: 1;
    }

    &:hover {
      background: rgba(var(--input-background-hover), 1);

      .multiple-item {
        background: rgba(var(--input-background), 1);
      }
    }

    &:focus {
      background: rgba(var(--input-background-focus), 1);
    }

    &:hover,
    &:focus {
      box-shadow: 0 5px 25px -4px rgba(0, 0, 0, 0.05);
    }

    .angle-icon {
      position: absolute;
      top: 15px;
      transform: rotate(-90deg);
      opacity: 0.5;

      path {
        fill: rgb(var(--input-label)) !important;
      }
    }

    &:focus .angle-icon,
    .search-input:focus ~ .angle-icon {
      transform: rotate(90deg);
    }

    .submit-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 8px;

      button {
        padding: 6px 9px 6px 9px;

        svg path {
          fill: rgb(var(--text-color));
        }
      }
    }

    .remove-btn {
      position: absolute;
      top: 2px;
      left: 22px;
      width: 28px;
      height: 28px;
      opacity: 0.6;
    }

    span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      float: right;
      width: 95%;
    }

    .search-input {
      background: transparent !important;
    }

    .multiple-item {
      position: relative;
      color: rgba(var(--text-color), 1);
      background: rgba(var(--background-color), 1);
      border-radius: 16px;
      white-space: nowrap;
      padding: 2px 14px;
      //border: 3px solid rgba(var(--input-background-hover), 1);

      .multiple-item-remove-btn {
        position: absolute;
        left: -4px;
        top: -4px;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        background: rgba(var(--background-color), 1);
        outline: none;
        border: none;
        padding: 5px;

        svg {
          fill: rgba(var(--text-color), 1);
        }

        &:hover {
          background: rgba(var(--danger), 1);

          svg {
            fill: rgba(var(--white), 1);
            transition: 0ms;
          }
        }
      }
    }
  }

  .input-group-append {
    span {
      padding: 0 16px;
      height: 47px;
      border: 2px solid rgba(var(--text-color), 0.1) !important;
      color: rgba(var(--text-color), 0.7);
    }
  }

  .input-group-text {
    background-color: rgba(var(--background-color-light), 1) !important;
    border: none !important;
    font-size: 12px;
  }

  &.icon-right {
    input {
      padding-right: 48px;
    }

    .ks-input-icon {
      right: 0;
    }
  }

  &.icon-left {
    input {
      padding-left: 48px;
    }

    .ks-input-icon {
      left: 0;
    }
  }

  .ks-input-icon {
    position: absolute;
    top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(var(--background-color), 0.5);
    border: none;
    border-radius: 12px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);

    svg path {
      fill: rgb(var(--text-color)) !important;
      stroke: rgb(var(--text-color)) !important;
    }
  }

  .ltr-input.input-group:not(.has-validation)
    > .dropdown-toggle:nth-last-child(n + 3),
  .ltr-input.input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .rtl-input .input-group-append .input-group-text,
  .input-group.ltr-input input {
    border-top-left-radius: 12px !important;
    border-bottom-left-radius: 12px !important;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .rtl-input.input-group:not(.has-validation)
    > .dropdown-toggle:nth-last-child(n + 3),
  .rtl-input.input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .ltr-input .input-group-append .input-group-text,
  .input-group.rtl-input input {
    border-top-right-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
}
</style>
