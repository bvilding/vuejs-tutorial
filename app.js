var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },

    methods: { //You can use this to inject functions to your variables.

    },

    computed: {
        greet: function () {
            return 'Hello from App One';
        }
    },
}); //Don't forget the comma's inbetween each function.

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'

    },

    methods: { //You can use this to inject functions to your variables.
        changeTitle: function () {
            one.title = "Title Changed";
        }
    },

    computed: {
        greet: function () {
            return 'App Two here!';
        }
    },
}); //Don't forget the comma's inbetween each function.

two.title = "Changed from Outside";