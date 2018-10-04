<template>
  <div>
    <app-header></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
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
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  }
};
</script>

<style>
</style>
