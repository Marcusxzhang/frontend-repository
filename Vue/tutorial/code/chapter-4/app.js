// 实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        number : 26,
        x:0,
        y:0
    },
    methods: {
        addNumber: function(number){
            this.number += number;
        },
        minusNumber: function(number){
            this.number -= number;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})