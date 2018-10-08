import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
//Filters
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase();
// });

const router = new VueRouter({
  routes: Routes
});

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + "...";
});

//Custom Directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
    console.log(el.style.color);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// Vue.component('ninjas', Ninjas); //This is how you register the component globally.

new Vue({ //This is the initial Vue.
  el: '#app',
  render: h => h(App),
  router: router //Takes the root component 'app.vue' and renders it to the page.
});

//This file controls everything from the start.
//This breaks down ES6 code.
