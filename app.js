new Vue({
    el: '#vue-app',
    data: {
        name: 'Vinni',
        job: 'Developer'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});