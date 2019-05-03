// 实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name : "Marcus",
        job : "Frontend Development"
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name + '!';
        }
    }
})