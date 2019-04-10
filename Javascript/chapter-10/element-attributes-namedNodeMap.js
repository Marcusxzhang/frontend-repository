var element = document.getElementById("myDiv");

// 取得元素的id属性
var id = element.attributes["id"].nodeValue;

// 设置新值
element.attributes["id"].nodeValue = "otherID";

// 删除
var oldAttr = element.attributes.removeNamedItem("id");

