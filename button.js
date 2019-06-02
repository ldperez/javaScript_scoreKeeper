var p1btn= document.querySelector(".p1");
var p2btn= document.querySelector(".p2");
var p1ScoreDisplay = document.querySelector(".p1Score");
var p2ScoreDisplay = document.querySelector(".p2Score");
var scoreLimit = document.querySelector("input");
var reset = document.querySelector(".reset");
var limit = document.querySelector(".limit");
var p1Score =0,
	p2Score =0,
	winningScore = 5,
	gameOver=false;




p1btn.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	if (p1Score==winningScore) {
	gameOver= true;
	p1ScoreDisplay.classList.toggle("winner");
}
	p1ScoreDisplay.textContent = p1Score;
	
}
})

p2btn.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score==winningScore){
			gameOver= true;
			p2ScoreDisplay.classList.toggle("winner");
	}	
	p2ScoreDisplay.textContent = p2Score;}
});



reset.addEventListener("click", function(){
	reset1();
});

function reset1(){
	p2Score = 0;
	p1Score =0;
	gameOver= false;
	p1ScoreDisplay.textContent = p2Score;
	p2ScoreDisplay.textContent = p2Score;
	p1ScoreDisplay.classList.remove("winner");
	p2ScoreDisplay.classList.remove("winner");
}

scoreLimit.addEventListener("change", function(){
	
	
	limit.textContent = scoreLimit.value;
	winningScore = Number( scoreLimit.value);
	reset1();
})