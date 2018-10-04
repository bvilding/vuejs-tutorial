<template>
    <footer>
        <p> {{ copyright }} {{ title }} </p>
    </footer>
</template>

<script>
export default {
  props: {
    title: {
      Type: String
    }
  },
  data() {
    // This is the function for the component. This is an ES6 function.
    return {
      copyright: "Copyright 2018 Vinni Hoke"
    };
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
