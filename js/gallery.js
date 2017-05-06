var path = "images/gallery/";

var gallery = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg"];

var currentimg = 0;

var imagenum = sessionStorage.getItem('selectedImage');

function prev(){
	currentimg--;
	if (currentimg < 0) {
		currentimg = 8;
	}
	sessionStorage.setItem('selectedImage', currentimg + 1);
	$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image"+currentimg);
}

function next(){
	currentimg++;
	if (currentimg > 8) {
		currentimg = 0;
	}
	sessionStorage.setItem('selectedImage', currentimg + 1);
	$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image"+currentimg);
}

function dataCheck(){
	switch(imagenum) {
		case "1":
			currentimg = 0;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image0");
			break;
		case "2":
			currentimg = 1;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image1");
			break;
		case "3":
			currentimg = 2;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image2");
			break;
		case "4":
			currentimg = 3;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image3");
			break;
		case "5":
			currentimg = 4;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image4");
			break;	
		case "6":
			currentimg = 5;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image5");
			break;
		case "7":
			currentimg = 6;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image6");
			break;	
		case "8":
			currentimg = 7;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image7");
			break;
		case "9":
			currentimg = 8;
			$("#image").attr("src", path + gallery[currentimg]).removeClass().addClass("image8");
			break;		
	}
}

$(document).ready(function() {
	dataCheck();
	$(document).on("keydown", function(e){
    	var x = e.which || e.keyCode;
		switch (x) {
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