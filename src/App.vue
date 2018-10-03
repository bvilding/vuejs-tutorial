<template>
  <div>
    <app-header></app-header>
    <ninjas></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";

export default {
  components: {
    "app-header": Header, //Header is already a tag and cannot be used for a component name.
    "app-footer": Footer, //Footer is already a tag and cannot be used for a component name.
    ninjas: Ninjas //Don't forget commas
  },
  data() {
    // This is the function for the component. This is an ES6 function.
    return {};
  }
};
</script>

<style>
</style>
