new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },

    methods: { //You can use this to inject functions to your variables.
        // addToA: function () {
        //     return this.a + this.age;
        //         console.log('addToA');
        // },

        // addToB: function () {
        //     return this.b + this.age;
        //         console.log('addToA');
        // }
    },

    computed: {
        addToA: function () {
            console.log('addToA');
            return this.a + this.age;
        },

        addToB: function () {
            console.log('addToB');
            return this.b + this.age;
        }
    },
}); //Don't forget the comma's inbetween each function.