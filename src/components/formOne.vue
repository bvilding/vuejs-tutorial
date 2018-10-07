<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label for="">Your Message:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Send</button>
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
  methods: {
    handleSubmit: function() {
      alert("Thank you gor submitting this form!");
    }
  }
};
</script>

<style>
</style>

// Strings, Boolean, Numbers are examples of Primitives
// Arrays and Objects are examples of Reference Types.