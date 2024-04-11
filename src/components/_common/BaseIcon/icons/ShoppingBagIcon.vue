<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 24 24"
    :fill="active ? fill : 'none'"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-shopping-bag">
    <path
      :stroke="fill"
      d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line :stroke="active ? '#fff' : fill" x1="3" y1="6" x2="21" y2="6"></line>
    <path :stroke="active ? '#fff' : fill" d="M16 10a4 4 0 0 1-8 0"></path>
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
    default: "16",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
