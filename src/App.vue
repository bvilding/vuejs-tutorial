<template>
  <!-- Everything must live within one tag -->
  <div> 
    <h1> {{ title }} </h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from "./Qontact.vue";

export default {
  //This is exporting the object. Similar to how we used components to push the template to the view.
  components: {
    //This is how you register a component Locally; or so it lives in one file.
    ninjas: Ninjas
  }, //Don't forget the commas.
  data() {
    // This is the function for the component. This is an ES6 function.
    return {
      title: "Qontact App"
    };
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
