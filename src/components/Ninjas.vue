<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                <h2> {{ ninja.name }} </h2>
                <h3 v-show="ninja.show"> {{ ninja.speciality }} </h3>
            </li>
        </ul>
				<button v-on:click="deleteNinja">Delete Ninja</button>
    </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },

  data() {
    // This is the function for the component. This is an ES6 function.
    return {};
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop();
    }
  },
  //Lifecycle Hooks. Take a look at the Vue JS documentation for the breakdown of Lifecycle Hook Funcitons.
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    //Use this as a point to fetch database information.
    alert("Created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    //this is when things pop up on the screen.
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  }
};
</script>

<style scoped>
#ninjas {
  width: 100&;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
