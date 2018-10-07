<template>
  <div>
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form One</button>
    <button v-on:click="component = 'form-two'">Show form One</button>

  </div>
</template>

<script>
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
  components: {
    formOne: formOne,
    formTwo: formTwo
  },
  data() {
    // This is the function for the component. This is an ES6 function.
    return {
      component: "form-two"
    };
  },
  methods: {}
};
</script>

<style>
</style>

// Strings, Boolean, Numbers are examples of Primitives
// Arrays and Objects are examples of Reference Types.