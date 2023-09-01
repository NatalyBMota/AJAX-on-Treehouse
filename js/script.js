var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
    /* if the readyState property is equal to 4, that 
    means that we got the response back. */
    if (xhr.status === 200) {
        document.getElementById('ajax').innerHTML = xhr.responseText;
    } 
    
    /* else if (xhr.status === 404) {
        //file not found
    } else if (xhr.status === 500) {
        //server had a problem
    } */
    
    else {
        alert(xhr.statusText);
    }
    }
};
xhr.open('GET', 'sidebar.html');
//xhr.open('GET', 'missing.html');
function sendAJAX() {
    xhr.send();
    document.getElementById('load').style.display = "none";
};