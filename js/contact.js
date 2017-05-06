$(document).ready(function() {
	
	var namevalidationpass = "false";
	var emailvalidationpass = "false";
	var subjectvalidationpass = "false";
	var phonevalidationpass = "false";
	var addressvalidationpass = "false";
	var messagevalidationpass = "false";
	
	var nameinput = document.getElementById("clientname");
	var emailinput = document.getElementById("email");
	var subjectinput = document.getElementById("subject");
	var phoneinput = document.getElementById("phone");
	var addressinput = document.getElementById("address");
	var messageinput = document.getElementById("message");
	
	var blankinputcheck = '';
	var letters = /^[a-zA-Z\s]+$/;
	var emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var landlinephonecheck = /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
	var mobilephonecheck = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
	var modifiedphonenumber = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
	
	var namecounter = 0;
	var emailcounter = 0;
	var subjectcounter = 0;
	var phonecounter = 0;
	var addresscounter = 0;
	var messagecounter = 0;

	nameinput.oninput = function() {
    	if (this.value.match(letters) && (this.value !== blankinputcheck)) {
			$("#clientname").css("color", "white").css("border-bottom", "1px solid white");
			namevalidationpass = "true";
    	} else {
			$("#clientname").css("color", "darkred");
			namevalidationpass = "false";
    	}
  	};
	
	emailinput.oninput = function(){
    	if (this.value.match(emailcheck) && (this.value !== blankinputcheck)) {
			$("#email").css("color", "white").css("border-bottom", "1px solid white");
			emailvalidationpass = "true";
    	} else {
			$("#email").css("color", "darkred");
			emailvalidationpass = "false";
    	}
  	};
	
	subject.oninput = function() {
    	if (this.value.match(letters) && (this.value !== blankinputcheck)) {
			$("#subject").css("color", "white").css("border-bottom", "1px solid white");
			subjectvalidationpass = "true";
    	} else {
			$("#subject").css("color", "darkred");
			subjectvalidationpass = "false";
    	}
  	};
	
	phone.oninput = function(){
    	if (this.value.match(landlinephonecheck || mobilephonecheck || modifiedphonenumber) && (this.value !== blankinputcheck)) {
			$("#phone").css("color", "white").css("border-bottom", "1px solid white");
			phonevalidationpass = "true";
    	} else {
			$("#phone").css("color", "darkred");
			phonevalidationpass = "false";
    	}
  	};

	address.oninput = function() {
    	if (this.value !== blankinputcheck) {
			$("#address").css("color", "white").css("border-bottom", "1px solid white");
			addressvalidationpass = "true";
    	} else {
			$("#address").css("color", "darkred");
			addressvalidationpass = "false";		
    	}
  	};
	
	messageinput.oninput = function() {
    	if (this.value !== blankinputcheck) {
			$("#message").css("color", "white").css("border-bottom", "1px solid white");
			messagevalidationpass = "true";
    	} else {
			$("#message").css("color", "darkred");
			messagevalidationpass = "false";			
    	}
  	};

var validations = ["Please enter a valid name <br>", "Please enter a valid email <br>", "Please enter a valid subject <br>", "Please enter a valid phone number <br>", "Please enter a valid address <br>", "Please enter a valid message <br>"];

function namevalidationcheck() {
	if (namevalidationpass === "false") {
		if (namecounter <= 0) { 
			$("#validation").append(validations[0]);
			namecounter++;
		}
		$("#clientname").css("color", "darkred").css("border-bottom", "1px solid darkred");
	} else {
		var currentvalidation = $("#validation").html();
		var updatedstring = currentvalidation.replace("Please enter a valid name <br>", "");
		$("#validation").html(updatedstring);
		namecounter = 0;
	}
}

function emailvalidationcheck() {
	if (emailvalidationpass === "false") {
		if (emailcounter <= 0) { 
			$("#validation").append(validations[1]);
			emailcounter++;
		}
		$("#email").css("color", "darkred").css("border-bottom", "1px solid darkred");
	} else {
		var currentvalidation = $("#validation").html();
		var updatedstring = currentvalidation.replace("Please enter a valid email <br>", "");
		$("#validation").html(updatedstring);
		emailcounter = 0;
	}
}

function subjectvalidationcheck() {
	if (subjectvalidationpass === "false") {
		if (subjectcounter <= 0) { 
			$("#validation").append(validations[2]);
			subjectcounter++;
		}
		$("#subject").css("color", "darkred").css("border-bottom", "1px solid darkred");
	} else {
		var currentvalidation = $("#validation").html();
		var updatedstring = currentvalidation.replace("Please enter a valid subject <br>", "");
		$("#validation").html(updatedstring);
		subjectcounter = 0;
	}
}

function phonevalidationcheck() {
	if (phonevalidationpass === "false") {
		if (phonecounter <= 0) { 
			$("#validation").append(validations[3]);
			phonecounter++;
		}
		$("#phone").css("color", "darkred").css("border-bottom", "1px solid darkred");
	} else {
		var currentvalidation = $("#validation").html();
		var updatedstring = currentvalidation.replace("Please enter a valid phone number <br>", "");
		$("#validation").html(updatedstring);
		phonecounter = 0;
	}
}

function addressvalidationcheck() {
	if (addressvalidationpass === "false") {
		if (addresscounter <= 0) { 
			$("#validation").append(validations[4]);
			addresscounter++;
		}
		$("#address").css("color", "darkred").css("border-bottom", "1px solid darkred");
	} else {
		var currentvalidation = $("#validation").html();
		var updatedstring = currentvalidation.replace("Please enter a valid address <br>", "");
		$("#validation").html(updatedstring);
		addresscounter = 0;	
	}
}

function messagevalidationcheck() {
	if (messagevalidationpass === "false") {
		if (messagecounter <= 0) { 
			$("#validation").append(validations[5]);
			messagecounter++;
		}
		$("#message").css("color", "darkred").css("border-bottom", "1px solid darkred");
	} else {
		var currentvalidation = $("#validation").html();
		var updatedstring = currentvalidation.replace("Please enter a valid message <br>", "");
		$("#validation").html(updatedstring);
		messagecounter = 0;
	}
}

	$(nameinput).blur(namevalidationcheck);
	$(emailinput).blur(emailvalidationcheck);
	$(subjectinput).blur(subjectvalidationcheck);
	$(phoneinput).blur(phonevalidationcheck);
	$(addressinput).blur(addressvalidationcheck);
	$(messageinput).blur(messagevalidationcheck);
	
	var form = $("#contactform");

	$(form).submit(function(e) {
		
		e.preventDefault();
		
		$("input[type='submit']").attr("disabled", true);
		
		if((namevalidationpass !== "false") && (emailvalidationpass !== "false") && (subjectvalidationpass !== "false") && (phonevalidationpass !== "false") && (addressvalidationpass !== "false") && (messagevalidationpass !== "false")){
			// Serialize the form data.
			var formData = $(form).serialize();

			// Submit the form using AJAX.
			$.ajax({
				type: "POST",
				url: $(form).attr("action"),
				data: formData,
				dataType:'text',
				success: function(success) {
						setTimeout(function () { 
							$("input[type='submit']").attr("disabled", false);
						}, 2000);
						$("#contactform").each(function(){
							this.reset();
						});
						$("#validation").css("color", "green").text("Your message has been sent.");
						setTimeout(function () { 
							$("#validation").text("").css("color", "darkred");
						}, 7000);
					},
				error: function(error) {
						setTimeout(function () { 
							$("input[type='submit']").attr("disabled", false);
						}, 4000);
						$("#validation").text("Error please try again.");
						setTimeout(function () { 
							$("#validation").text("");
						}, 7000);
					}
			});
		
		} else {
			setTimeout(function () { 
				$("input[type='submit']").attr("disabled", false);
			}, 4000);
			$("#validation").text("Please complete the form.");
			setTimeout(function () { 
				$("#validation").text("");
			}, 7000);			
		}
		
	});

});