new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false,
    },

    methods: { //You can use this to inject functions to your variables.

    },

    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            };
        }
    },
}); //Don't forget the comma's inbetween each function.