var xhr = createXHR();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            console.log(xhr.responseText);
        } else {
            console.log("Request was unsuccessful : " + xhr.status);
        }
    }
};
xhr.open("get", "example.php", true);
xhr.send(null);