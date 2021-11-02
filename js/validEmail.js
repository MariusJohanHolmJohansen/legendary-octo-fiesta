function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendMail() {
    var mail = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = "?subject=Emne:"

    if (validateEmail(mail)) {
        contactForm.action = 
        'mailto:' 
            + mail + encodeURIComponent(subject) 
            + "&body=" + encodeURIComponent(message)
    contactForm.submit();
    alert("Mail client launched!")
    }
    else {
        alert("Incorrect email format.")
    }
}