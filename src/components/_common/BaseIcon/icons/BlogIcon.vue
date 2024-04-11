<template>
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.3193 54.6385C42.855 54.6385 54.6385 42.855 54.6385 28.3193C54.6385 13.7835 42.855 2 28.3193 2C13.7835 2 2 13.7835 2 28.3193C2 42.855 13.7835 54.6385 28.3193 54.6385Z"
      :stroke="fill"
      :fill="active && fill"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M19.1699 37.4685L23.5323 23.5325L37.4682 19.1702L33.1059 33.1061L19.1699 37.4685Z"
      :stroke="active ? '#fff' : fill"
      :stroke-width="active ? '5' : '3.5'"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>

<script setup>
defineProps({
  fill: {
    type: String,
    default: "#000000",
  },
  width: {
    type: String,
    default: "18",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
