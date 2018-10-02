new Vue({
    el: '#vue-app',
    data: {

    },
    methods: { //You can use this to inject functions to your variables.
        logName: function () {
            console.log("You entered your name");
        },

        logAge: function () {
            console.log("You entered your age");
        }
    }
}); //Don't forget the comma's inbetween each function.