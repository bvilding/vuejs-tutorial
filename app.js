new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
    },

    methods: { //You can use this to inject functions to your variables.
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        },
    },

    computed: {

    },
}); //Don't forget the comma's inbetween each function.