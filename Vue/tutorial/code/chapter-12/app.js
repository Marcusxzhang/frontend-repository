Vue.component("greeting", {
    template: '<p>Hello world {{name}}<button v-on:click="changeName()">change name</button></p>',
    data: function() {
        return {
            name : "Marcus"
        }
    },
    methods: {
        changeName: function() {
            this.name = "Mars"
        }
    }
})

// 实例化vue对象
new Vue({
    el: "#vue-app-one"
});

new Vue({
    el: "#vue-app-two"
});