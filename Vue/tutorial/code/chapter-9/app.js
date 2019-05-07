// 实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        changeColor: false,
        changeLength: false
    },
    methods: {
    },
    computed: {
        compClasses: function() {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
})