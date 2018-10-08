import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Vue.component('ninjas', Ninjas); //This is how you register the component globally.

new Vue({ //This is the initial Vue.
  el: '#app',
  render: h => h(App) //Takes the root component 'app.vue' and renders it to the page.
})

//This file controls everything from the start.
//This breaks down ES6 code.
