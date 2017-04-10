var length = 6
var colors = generateRandomColors(length);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns =document.querySelectorAll(".mode");

init();


function init(){
	for(var i=0; i< modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? length = 3: length =6;
			reset();
		});
	}

	for(var i =0; i<squares.length; i++){

	squares[i].style.background =colors[i];

	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent= "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = pickedColor;
		} else {
			this.style.background="#232323";
			messageDisplay.textContent= "Try again";
		}
	});
}
}



	function reset(){
	colors =generateRandomColors(length);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent= "";
	resetButton.textContent = "New Colors"

	for(var i= 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background ="steelblue";
	}



resetButton.addEventListener("click", function() {
	reset();
})	


colorDisplay.textContent = pickedColor;



function changeColors(color){
	for (var i =0; i<squares.length; i++){
		squares[i].style.background= color;
	}
}

function pickColor(){
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}
function randColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function generateRandomColors(num){
	var arr = []
	for (var i =0; i<num;i++){
		arr.push(randColor());
	}
	return arr;
}