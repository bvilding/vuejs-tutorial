<template>
  <div>
    <show-blogs></show-blogs>
    <!-- <add-blog></add-blog> -->
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs";

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
