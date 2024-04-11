<script setup lang="ts">
import BlogListHorizontal from "./horizontal/index.vue";
import BlogListVertical from "./vertical/index.vue";
</script>

<template>
  <div>
    <BlogListHorizontal :blog-list="[]" />
    <BlogListVertical :blog-list="[]" />
  </div>
</template>
