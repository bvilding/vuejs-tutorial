new Vue({
    el: '#vue-app',
    data: {
        name: 'Vinni',
        job: 'Developer',
        website: 'https://www.qontact.app',
        websiteTag: '<a href="https://www.qontact.app">Qontact.app Website</a>'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});