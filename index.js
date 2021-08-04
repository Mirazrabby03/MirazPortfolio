function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "mirazrabby03@gmail.com",
	//Password : "miraz1621589",
	To : "mirazrabby03@gmail.com",
	From : document.getElementById('email').nodeValue,
	Subject : "<email subject>",
	Body : document.getElementById('message').value
	}).then(function(response){
        if (response == 'OK'){
             alert("mail sent successfully");
        } else{
            throw new Error("Error: " + response.statusText);
        }
    });
}