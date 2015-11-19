var image=document.getElementById("kunstwerk");

var rotation = 0;
var showNextImage= 0;   

// turns image on button click	        
var turnImage=function(angle) {
	//console.log("knop 1 doet het");
	
	rotation +=  angle;
	image.style.transform = 'rotate('+rotation+'deg)'; 
};
	        
var guess = function() {
	console.log("knop 2 doet het");
	if (rotation % 360 === 0) {
        window.alert("Heel goed! Probeer de volgende eens!");
	}  
	else {
        window.alert("Helaas, draai nog een keer!");
    }
};

var imgArray = [];
    
    
var nextImage= function() { 
    document.getElementById("kunstwerk").src = imgArray[showNextImage];
    console.log("knop 3 doet het");
    
    if (showNextImage < (imgArray.length - 1)) {
        console.log("jaa");
        showNextImage += 1; 
        console.log(showNextImage);
    }
    else {
        console.log("neeee");
        console.log(showNextImage);
        showNextImage = 0;
    }
}    