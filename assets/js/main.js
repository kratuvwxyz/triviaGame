//$(document).ready(function() {
//// Create a function that creates the start button and initial screen
//
//function initialScreen() {
//	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
//	$(".mainArea").html(startScreen);
//}
//
//initialScreen();
//
////Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
//
//$("body").on("click", ".start-button", function(event){
//	event.preventDefault();  // added line to test issue on GitHub Viewer
//	clickSound.play();
//	generateHTML();
//
//	timerWrapper();
//
//}); // Closes start-button click
//
//$("body").on("click", ".answer", function(event){
//	//answeredQuestion = true;
//	clickSound.play();
//	selectedAnswer = $(this).text();
//	if(selectedAnswer === correctAnswers[questionCounter]) {
//		//alert("correct");
//
//		clearInterval(theClock);
//		generateWin();
//	}
//	else {
//		//alert("wrong answer!");
//		clearInterval(theClock);
//		generateLoss();
//	}
//}); // Close .answer click
//
//$("body").on("click", ".reset-button", function(event){
//	clickSound.play();
//	resetGame();
//}); // Closes reset-button click
//
//});  //  Closes jQuery wrapper
//
//function generateLossDueToTimeOut() {
//	unansweredTally++;
//	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
//	$(".mainArea").html(gameHTML);
//	setTimeout(wait, 4000);  //  change to 4000 or other amount
//}
//
//function generateWin() {
//	correctTally++;
//	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
//	$(".mainArea").html(gameHTML);
//	setTimeout(wait, 4000);  //  change to 4000 or other amount
//}
//
//function generateLoss() {
//	incorrectTally++;
//	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
//	$(".mainArea").html(gameHTML);
//	setTimeout(wait, 4000); //  change to 4000 or other amount
//}
//
//function generateHTML() {
//	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p>
//<p class='text-center'>" + questionArray[questionCounter] + "</p>
//<p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
//	$(".mainArea").html(gameHTML);
//}
//
//function wait() {
//	if (questionCounter < 7) {
//	questionCounter++;
//	generateHTML();
//	counter = 30;
//	timerWrapper();
//	}
//	else {
//		finalScreen();
//	}
//}
//
//function timerWrapper() {
//	theClock = setInterval(thirtySeconds, 1000);
//	function thirtySeconds() {
//		if (counter === 0) {
//			clearInterval(theClock);
//			generateLossDueToTimeOut();
//		}
//		if (counter > 0) {
//			counter--;
//		}
//		$(".timer").html(counter);
//	}
//}
//
//function finalScreen() {
//	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
//	$(".mainArea").html(gameHTML);
//}
//
//function resetGame() {
//	questionCounter = 0;
//	correctTally = 0;
//	incorrectTally = 0;
//	unansweredTally = 0;
//	counter = 30;
//	generateHTML();
//	timerWrapper();
//}
//
//var startScreen;
//var gameHTML;
//var counter = 30;
//var questionCounter = 0;
//var selecterAnswer;
//var theClock;
//var correctTally = 0;
//var incorrectTally = 0;
//var unansweredTally = 0;
//var clickSound = new Audio("sound/button-click.mp3");
//


//game begin

var questionsList = ["How did Daenerys Targaryen eventually hatch her dragon eggs?", "Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?", "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:", "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:", "What is the only thing that can put out volatile Wildfire?"];
var answersList = [[" In a lightning storm", " In a funeral pyre", "In a fireplace", "In a frozen cave"], ["Chicago","New York City","San Diego","Boston"], ["Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "Valar GoGo or 'all men must cry'"], ["Lord of the Rings","Highlander","The Chronicles of Narnia","The Legend of Zelda"], ["Sand", "Water", "Dragon's blood", "Sunlight"]];
var imagesList = [
	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/dragon-eggs-game-of-thrones.jpg.482x490_q71_crop-smart.jpg'>", 
	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/iron-throne.jpg.482x490_q71_crop-smart.jpg'>", 
	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/morghoulis.jpg.482x490_q71_crop-smart.jpg'>", 
	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/tyrion-lannister.jpg.482x490_q71_crop-smart.jpg'>", 
	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/wildfire-game-of-thrones.jpg.482x490_q71_crop-smart.jpg'>"];
var correctAnswers = ["In a funeral pyre", "San Diego", "Valar Dohaeris or 'all men must serve'", "The Chronicles of Narnia", "Sand"];


// need a counter for win or loose or clock done you duck situation
var win = 0;
var loose = 0;
var youMissTheBus = 0;

var questionCounter = 0;

//need a sound when button clicked
var buttonclickSound = new Audio("sound/button-click.mp3");

//text - winter is coming...
$(".mainArea").html("Winter is coming...");

//create a button at the begining
var newTriviaButton = $('<button>');
$(newTriviaButton).addClass("btn btn-outline-warning btn-lg btn-block p-2 m-2 newButton2").text("Are you ready for Trivia?");
$("#mainArea").html(newTriviaButton);

//when this button click, do some action
$(".newButton2").on("click", function(event){
				
	event.preventDefault();
	
	buttonclickSound.play();
	
	generateHTMLPage();
	
	timeTracker();
	
				});

//needs to move this page to next page where trivia start
$("body").on("click", ".answer", function(){
	buttonclickSound.play();
	var selectedButtonAnswer = $(this).text();
	if ( selectedButtonAnswer === correctAnswers[questionCounter]) {
//		clearInterval(theClock);
		generateWin();
	}
	
	else {
		clearInterval(theClock);
		generateLoose();
	}
});

//$("body").on("click", ".answer", function(event){
//	//answeredQuestion = true;
//	clickSound.play();
//	selectedAnswer = $(this).text();
//	if(selectedAnswer === correctAnswers[questionCounter]) {
//		//alert("correct");
//
//		clearInterval(theClock);
//		generateWin();
//	}
//	else {
//		//alert("wrong answer!");
//		clearInterval(theClock);
//		generateLoss();
//	}
//}); // Close .answer click

//let's create a new page once the button click
//how about creating a page with a function, so when button click function run with that page

function generateWin() {
	win++;
	//start new set of timer
	var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
	$(".mainArea").html(newHTMLPage);
	//current question
	var questionPage = "<p class='text-center'>"+questionsList[questionCounter]+"</p><p>Correct! The answer is:</p>";
	$("#mainQuestion").html(questionPage);
	//current question's answer
	var answerPage = "<p class='btn-lg btn-block btn-outline-light'>"+correctAnswers[questionCounter]+"</p>"
	$("#mainArea").html(answerPage);
	
	//once this page is answered, trigger to next page via set time out
	setTimeout(wait, 5000);
}

function generateLoose() {
	loose++;
	//start new set of timer
	var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
	$(".mainArea").html(newHTMLPage);
	//current question
	var questionPage = "<p class='text-center'>"+questionsList[questionCounter]+"</p><p>Wrong! The correct answer is:</p>";
	$("#mainQuestion").html(questionPage);
	//current question's answer
	var answerPage = "<p class='btn-lg btn-block btn-outline-light'>"+correctAnswers[questionCounter]+"</p>"
	$("#mainArea").html(answerPage);
	
	//once this page is answered, trigger to next page via set time out
	setTimeout(wait, 3000);
}

function generateLooseTimeOut() {
	youMissTheBus++;
	//start new set of timer
	var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
	$(".mainArea").html(newHTMLPage);
	//current question
	var questionPage = "<p class='text-center'>"+questionsList[questionCounter]+"</p><p>You ran out of time! The correct answer is:</p>";
	$("#mainQuestion").html(questionPage);
	//current question's answer
	var answerPage = "<p class='btn-lg btn-block btn-outline-light'>"+correctAnswers[questionCounter]+"</p>"
	$("#mainArea").html(answerPage);
	
	//once this page is answered, trigger to next page via set time out
	setTimeout(wait, 3000);
}

function generateHTMLPage(){
	$('.hideTrigger').hide();
	//start new set of timer
	var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : "+timer+"</p>";
	$(".mainArea").html(newHTMLPage);
	//new question
	var questionPage = "<p class='text-center'>"+questionsList[questionCounter]+"</p>";
	$("#mainQuestion").html(questionPage);
	//new answers related to that question 
	//answerlist [first array select group of array] [second array select answer by sequence number]
	var answerPage = "<p class='btn btn-lg btn-block btn-outline-light answer'>"+answersList[questionCounter][0]+"</p><p class='btn btn-lg btn-block btn-outline-light answer'>"+answersList[questionCounter][1]+"</p><p class='btn btn-lg btn-block btn-outline-light answer'>"+answersList[questionCounter][2]+"</p><p class='btn btn-lg btn-block btn-outline-light answer'>"+answersList[questionCounter][3]+"</p>";
	$("#mainArea").html(answerPage);
}

// once you are in  a new page...



//createing final screen function to show what's the score

//createing screen changer once timer or right or wrong answer given which automatically start new timer and new question
function wait() {
	if (questionCounter < 5) {
		questionCounter++;
		generateHTMLPage();
		timer = 15;
		timeTracker();
	}
	else {
		finalScreen();
	}
}

//need some functin that call with timer
function clockDoneYouDuck(){
	youMissTheBus++;
	gameHTML = "<p>The correct Answer was:</p>";
	$("#mainArea").html(gameHTML);
	alert(youMissTheBus);
	wait();
			} 


// start a 30 / 2 seconds timer at a movement
var timer = 15;

// create a function that actually trigger time

function timeTracker() {
	var theClock = setInterval(fifteenSeconds, 1000); // every two seconds is equal to one second
	function fifteenSeconds() {
		if (timer === 0) {
			clearInterval(theClock);
			clockDoneYouDuck();
		}
		if (timer > 0) {
			timer--;
		}
		
		//want number in two digits to show up
		var formattedNumber = ("0" + timer).slice(-2);
		
		//timer to start
		$(".timer").html("<p class='text-left timer-p timer'>Time Remaining 00 : "+formattedNumber+"</p>");
	}
}

// show a question with a 4 different answers




