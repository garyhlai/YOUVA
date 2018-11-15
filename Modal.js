// Get the modal
var modal = document.getElementById('myModal');

//get the image and insert it inside the modal
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById("caption");
var subCaption;

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
	subCaption = this.alt;
}




var span = document.getElementById("close");

span.onclick = function() {
	modal.style.display = "none";
}



var next = document.getElementById('next');
var prev = document.getElementById('prev');
var currentName = img.src;

//get the substring you're aiming at 

var counter = 0;
for (var i=1; i<currentName.length; i++){
	
	//get the number
	if (currentName[(currentName.length-counter)] != '_')
	{
		counter+=1;
	}
}


//from currentName[(currentName.length-(counter-1))] to the end is the "number.jpg" string you want to change
//numberTracker is usually constant 
var numberTracker = currentName.length-(counter-1);
var currentNumber = currentName.substring(numberTracker,(currentName.length-4));
var nextNumber = Number(currentNumber) + 1;
var nextName = currentName.substring(0,numberTracker) + nextNumber + ".jpg";
var prevNumber = Number(currentNumber) - 1;
var prevName = currentName.substring(0,numberTracker) + prevNumber + ".jpg";


next.onclick = function() {

	modalImg.src = nextName;
	//set the caption
	subCaption = subCaption.substring(0, (subCaption.length-1)) + nextNumber;
	captionText.innerHTML = subCaption;
	//update the current name
	currentName = nextName;
	//update the next and prev 
	currentNumber = Number(currentNumber) + 1;
	nextNumber = Number(nextNumber) + 1;
	prevNumber = Number(prevNumber) + 1;
	nextName = currentName.substring(0,numberTracker) + nextNumber + ".jpg";
	prevName = currentName.substring(0,numberTracker) + prevNumber + ".jpg";
}


prev.onclick = function() {
	modalImg.src = prevName;
	//set the caption
	subCaption = subCaption.substring(0, (subCaption.length-1)) + prevNumber;
	captionText.innerHTML = subCaption;
	
	//update the current name
	currentName = prevName;
	//update the next and prev 
	currentNumber = Number(currentNumber) - 1;
	nextNumber = Number(nextNumber) - 1;
	prevNumber = Number(prevNumber) - 1;
	nextName = currentName.substring(0,numberTracker) + nextNumber + ".jpg";
	prevName = currentName.substring(0,numberTracker) + prevNumber + ".jpg";

}

