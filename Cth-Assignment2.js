console.log("Even kijken of het werkt!");
var Image=document.getElementById("kunstwerk");

var Rotation = 0;
	   Image.style.transition = "all 0.5s";
	        
var turnImage=function() {
	  console.log("knop 1 doet het");
	  Rotation = Rotation + 90;
	  Image.style.transform = 'rotate('+Rotation+'deg)'; 
	        };
	        
var guess = function() {
	 console.log("knop 2 doet het");
	  if (Rotation % 360 === 0) {
	       window.alert("Heel goed! Probeer de volgende eens!");
	       }  
	  else 
	       window.alert("Helaas, draai nog een keer!");
	        };

var imgArray = ["http://www.kunstvoorinhuis.nl/uploaded_images5_1/schilderij%20modern%20rood%20wit%20blauw%20geel(2).jpg",
    "http://www.glas-in-loodraam.nl/FTS/doesburg.jpg", 
    "http://www.kunstvoorinhuis.nl/uploaded_images5_1/schilderij%20roze%20rood%20geel.jpg"];

    
var showNextImage= 0;   
    
var nextImage= function() { 
    document.getElementById("kunstwerk").src = imgArray[showNextImage];
    console.log("knop 3 doet het");
    
    if (showNextImage < (imgArray.length - 1)) {
        console.log("jaa");
    showNextImage = showNextImage + 1; 
    console.log(showNextImage);
    }
    else {
        console.log("neeee");
        console.log(showNextImage);
        showNextImage = 0;
    }
    document.getElementById('kunstwerk');
}    