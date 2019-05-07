// 实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name: "",
        age: ""
    },
    methods: {
        logName: function(){
            console.log("Inputting name");
            this.name = this.$refs.name.value;
        },
        logAge: function(){
            console.log("Inputting age");
            this.age = this.$refs.age.value;
        },
    }
})