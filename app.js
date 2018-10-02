new Vue({
    el: '#vue-app',
    data: {
        age: 28,
        x: 0,
        y: 0,
    },
    methods: { //You can use this to inject functions to your variables.
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },

        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function () {
            alert('You clicked me!');
        }

    }
}); //Don't forget the comma's inbetween each function.