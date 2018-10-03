<template>
  <!-- Everything must live within one tag -->
  <div> 
    <h1> {{ title }} </h1>
    <p> {{ greeting() }} </p>
  </div>
</template>

<script>
export default {
  //This is exporting the object. Similar to how we used components to push the template to the view.
  //This is the name of the component.
  data() {
    // This is the function for the component. This is an ES6 function.
    return {
      title: "My first Vue file!"
    };
  },
  methods: {
    greeting: function() {
      return "Hello!!";
    }
  }
};
</script>

<style>
</style>
