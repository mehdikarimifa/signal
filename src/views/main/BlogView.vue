<script setup lang="ts">
import { onMounted } from "vue";
import ScrollView from "@/components/app/ScrollView.vue";
import BlogCategory from "@/components/app/body/blog/blogCategory/index.vue";
import BlogList from "@/components/app/body/blog/blogList/index.vue";

onMounted(() => {
  // TODO Receive blog category
  // TODO Receive blog list
});
</script>

<template>
  <ScrollView>
    <BlogCategory />
    <BlogList />
  </ScrollView>
</template>
