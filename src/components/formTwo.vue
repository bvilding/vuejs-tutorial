<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./formHelper";

export default {
  components: {},
  data() {
    // This is the function for the component. This is an ES6 function.
    return {};
  },
  methods: {}
};
</script>

<style>
</style>

// Strings, Boolean, Numbers are examples of Primitives
// Arrays and Objects are examples of Reference Types.