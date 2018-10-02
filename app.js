Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
    data: function () {
        return {
            name: "Vinni"
        };
    },
    methods: {
        changeName: function () {
            this.name = "Mario";
        }
    }
});

new Vue({
    el: '#vue-app-one',


    methods: { //You can use this to inject functions to your variables.

    },

    computed: {

    },
}); //Don't forget the comma's inbetween each function.

new Vue({
    el: '#vue-app-two',

    methods: { //You can use this to inject functions to your variables.

    },

    computed: {

    },
}); //Don't forget the comma's inbetween each function.