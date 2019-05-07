// 实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
    },
    computed: {
        addToA : function() {
            return this.a + this.age;
        },
        addToB : function() {
            return this.b + this.age;
        },
    }
})