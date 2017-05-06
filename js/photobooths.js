var path = "images/photobooths/modal images/";

var gallery = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg","image10.jpg","image11.jpg"];

var currentimg = 0;

function prev(){
	currentimg--;
	if (currentimg < 0) {
		currentimg = 10;
	}
	$("#image").attr("src", path + gallery[currentimg]);
}

function next(){
	currentimg++;
	if (currentimg > 10) {
		currentimg = 0;
	}
	$("#image").attr("src", path + gallery[currentimg]);
}

function modal(num){
	switch(num) {
		case 1:
			currentimg = 0;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;
		case 2:
			currentimg = 1;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;
		case 3:
			currentimg = 2;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;
		case 4:
			currentimg = 3;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;
		case 5:
			currentimg = 4;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;	
		case 6:
			currentimg = 5;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;
		case 7:
			currentimg = 6;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;	
		case 8:
			currentimg = 7;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;
		case 9:
			currentimg = 8;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;
		case 10:
			currentimg = 9;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;	
		case 11:
			currentimg = 10;
			$("#image").attr("src", path + gallery[currentimg]);
			$("body").css("overflow", "hidden");
			$("#imagemodal").show();
			break;			
	}
}

function closeModal(){
	$("body").css("overflow", "initial");
	$("#imagemodal").hide();
}

$(document).ready(function(){
    $("#imagemodal").hide();
    $(document).on("keydown", function(e){
    	var x = e.which || e.keyCode;
		switch (x) {
			case 27:
				closeModal();
				break;
			case 37:
				prev();
				break;
			case 39:
				next();
				break;
			default:
				break;
		}
	});
});