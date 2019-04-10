var element = document.getElementById("myDiv");
var len = element.childNodes.length;
for (var i=0; i < len; i++) {
    if (element.childNodes[i].nodeType == 1) {
        // run only the node type is element.
    }
}
