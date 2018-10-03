<template>
  <!-- Everything must live within one tag -->
    <ul>
       <li v-for="ninja in ninjas"> {{ ninja }} </li> 
    </ul>
</template>

<script>
export default {
  //This is exporting the object. Similar to how we used components to push the template to the view.
  //This is the name of the component.
  data() {
    // This is the function for the component. This is an ES6 function.
    return {
      ninjas: ["Yoshi", "Mario", "Ryu"]
    };
  }
};
</script>

<style>
</style>
