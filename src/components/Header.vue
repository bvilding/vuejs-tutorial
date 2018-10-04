<template>
    <header>
        <h1 v-on:click="changeTitle"> {{ title }} </h1>
    </header>
</template>



<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    // This is the function for the component. This is an ES6 function.
    return {};
  },
  methods: {
    changeTitle: function() {
      //This threw an error saying to use props instead. It knows it's causing an issue.
      this.title = "Vue Wizards";
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
