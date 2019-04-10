function outputAttributes(element) {
    var pairs = new Array(),
        attrName,
        attrValue,
        i;
    var len = element.attributes.length;;
    for (i=0; i < len; i++) {
        attrName = element.attributes[i].nodeName;
        attrValue = element.attributes[i].nodeValue;
        if (element.attributes[i].specified) {
            pairs.push(attrName + "=\"" + attrValue + "\"");
        }
    }
    return pairs.join(" ");
}