// 实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name : "Marcus",
        job : "Frontend Development",
        website: "https://www.google.com",
        websiteTag: "<a href='https://www.baidu.com'>The new website</a>"
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name + '!';
        }
    }
})