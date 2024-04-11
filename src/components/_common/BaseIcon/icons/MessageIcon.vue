<script setup lang="ts">
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

<template>
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 53 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.6392 1.99996C18.0398 1.96377 10.0497 6.63804 5.57823 14.3209C1.10681 22.0037 0.806649 31.574 4.78705 39.5468L5.27784 40.5491C5.68013 41.3377 5.76428 42.2618 5.51156 43.1157C4.81118 45.0645 4.2258 47.0564 3.75871 49.0802C3.75871 50.1068 4.03916 50.6935 5.09087 50.6691C6.95366 50.2381 8.78817 49.6829 10.5831 49.0068C11.3562 48.7838 12.1782 48.8354 12.9203 49.1535C13.598 49.4957 14.9769 50.3757 15.0237 50.3757C24.0293 55.3365 35.028 53.9679 42.6695 46.9357C50.3109 39.9036 53.0088 28.6676 49.4507 18.6937C45.8926 8.71974 36.8172 2.07833 26.6392 1.99996Z"
      :stroke="fill"
      :fill="active ? fill : 'none'"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M14.9529 30.2333C16.306 30.2333 17.4029 29.0842 17.4029 27.6666C17.4029 26.2491 16.306 25.1 14.9529 25.1C13.5998 25.1 12.5029 26.2491 12.5029 27.6666C12.5029 29.0842 13.5998 30.2333 14.9529 30.2333Z"
      :fill="active ? '#fff' : fill"
      :stroke="active ? '#fff' : fill"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M26.6395 30.2333C27.9926 30.2333 29.0895 29.0842 29.0895 27.6666C29.0895 26.2491 27.9926 25.1 26.6395 25.1C25.2864 25.1 24.1895 26.2491 24.1895 27.6666C24.1895 29.0842 25.2864 30.2333 26.6395 30.2333Z"
      :fill="active ? '#fff' : fill"
      :stroke="active ? '#fff' : fill"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M38.324 30.2333C39.6771 30.2333 40.774 29.0842 40.774 27.6666C40.774 26.2491 39.6771 25.1 38.324 25.1C36.9709 25.1 35.874 26.2491 35.874 27.6666C35.874 29.0842 36.9709 30.2333 38.324 30.2333Z"
      :fill="active ? '#fff' : fill"
      :stroke="active ? '#fff' : fill"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>
