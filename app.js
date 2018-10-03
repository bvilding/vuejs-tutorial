new Vue({
    el: '#vue-app-one',
    data: {
        output: 'Your Favorite Food'
    },

    methods: { //You can use this to inject functions to your variables.
        readRefs: function () {
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },

    computed: {

    },
}); //Don't forget the comma's inbetween each function.