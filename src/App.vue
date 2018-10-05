<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>This is some information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper";

export default {
  components: {
    "form-helper": formHelper
  },
  data() {
    // This is the function for the component. This is an ES6 function.
    return {
      title: "I am a dynamic Slot title" // This is where the information must reside in order for the component to work.
    };
  },
  methods: {}
};
</script>

<style>
</style>

// Strings, Boolean, Numbers are examples of Primitives
// Arrays and Objects are examples of Reference Types.