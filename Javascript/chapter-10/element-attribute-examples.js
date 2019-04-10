// HTML code :
// <div id="myDiv" align="left" my_special_attribute="hello!"></div>

var div = document.getElementById("myDiv");
console.log(div.id); // myDiv
console.log(div.my_special_attribute); // undefined
console.log(div.align); // left