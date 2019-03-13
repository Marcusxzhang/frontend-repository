/* [动态属性 - Dynamic Properities] */
// 引用类型
// 创建了一个对象，保存在变量person中，然后可以动态加属性。
var person = new Object();
person.name = 'Marcus';
alert(person.name); // "Marcus"

// 基本类型
// 不能动态添加属性。
var name = "Marcus";
name.age = 26;
alert(name.age); // undefined



/* [复制变量值] */
// 基本类型
// 复制了一份独立的数据出来。
var num1 = 5;
var num2 = num1;
alert(num2); // 5

// 引用类型
// obj1 保存了一个对象的实例，obj2指向了一样的对象，通过obj1改了name，下次obj2拿name也会是那个值，因为指的地方一样。
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Marcus";
alert(obj2.name); // "Marcus"



/* [传递参数 - Function Arguments] */
// 设置了一个局部参数num，调用函数时，将count传递到函数内部，但不影响外面的count值。完事了传出去就能修改值。
// 但是如果传进来的是一个引用类型，执行函数就会同时修改。
function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
alert(count); // 20
alert(result); // 30

// 对象复制给了obj，在函数内部，obj和person引用同一个对象。所以内部修改了，外面也修改了。即使不做return。因为在堆内存里只有一个，而且还是全局变量。
// 证明了是按值传递
function setName(obj) {
    obj.name = "Marcus";
}
var person = new Object();
setName(person);
alert(person.name); // "Marcus"

// 如果obj是引用对象的话，外面的person应该是Greg，可是结果不是。是因为这个变量引用的是局部对象，函数执行完就没了。
function setName(obj) {
    obj.name = "Marcus";
    obj = new Object();
    obj.name = "Greg";
}
var person = new Object();
setName(person);
alert(person.name); // "Marcus"



/* [检测类型 - Determining Type] */
// 如果检测是基本类型，用typeof。可是如果返回值是对象或者null，就会显示Object
var s = "Marcus";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();

alert(typeof s); // string
alert(typeof b); // number
alert(typeof i); // boolean
alert(typeof u); // Undefined
alert(typeof n); // Object
alert(typeof o); // Object

// 如果要知道是什么类型的对象，则使用instanceof
// result = variable instanceof constructor
// 注意 ： 因为所有的引用类型都是Object的实例。所以如果instanceof怼着引用类型 | Object构造函数，一定true。如果它怼着的是基本类型，一定false
alert(person instanceof Object);
alert(colours instanceof Array);
alert(pattern instanceof RegExp);
