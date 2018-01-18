function validateMessage(e) {
    var message = e.value;
    if (message.length === 0 || message.length > 1000) {
        e.focus();
        e.style.boxShadow = "0 0 10px red";
    } else {
        e.style.boxShadow = "";
    }
}

function validateInput(e) {
    if (e.value.length === 0) {
        e.focus();
        e.style.boxShadow = "0 0 10px red";
    } else {
        e.style.boxShadow = "";
    }
}
