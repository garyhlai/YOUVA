// Get the modal
var modal = document.getElementById('myModal');

//get the image and insert it inside the modal
//var img = document.getElementById('myImg');
var modalImg = document.getElementById('img');
var captionText = document.getElementById("caption");
var subCaption;
var currentName; 

var counter;
var numberTracker;
var currentNumber;
var nextNumber;
var nextName;
var prevNumber;
var prevName;



var next = document.getElementById('next');
var prev = document.getElementById('prev');

$('.myImg').click(function(){
	modal.style.display = "block";
	//modalImg = document.getElementById('img');
	modalImg.src = this.src;
	currentName = modalImg.src;
	captionText.innerHTML = this.alt;
	subCaption = this.alt;






	//get the substring you're aiming at 
	counter = 0;
	for (var i=1; i<currentName.length; i++){
		//get the number
		if (currentName[(currentName.length-counter)] != '_')
		{
			counter+=1;
		}
	}

//from currentName[(currentName.length-(counter-1))] to the end is the "number.jpg" string you want to change
//numberTracker is usually constant 
	numberTracker = currentName.length-(counter-1);
	currentNumber = currentName.substring(numberTracker,(currentName.length-4));
	nextNumber = Number(currentNumber) + 1;
	nextName = currentName.substring(0,numberTracker) + nextNumber + ".jpg";
	prevNumber = Number(currentNumber) - 1;
	prevName = currentName.substring(0,numberTracker) + prevNumber + ".jpg";


});




var span = document.getElementById("close");

span.onclick = function() {
	modal.style.display = "none";
}


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

