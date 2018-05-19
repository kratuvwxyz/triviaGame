
//game begin

var questionsList = ["How did Daenerys Targaryen eventually hatch her dragon eggs?", "Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?", "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:", "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:", "What is the only thing that can put out volatile Wildfire?"];
var answersList = [["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"], ["Chicago","New York City","San Diego","Boston"], ["Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "Valar GoGo or 'all men must cry'"], ["Lord of the Rings","Highlander","The Chronicles of Narnia","The Legend of Zelda"], ["Sand", "Water", "Dragon's blood", "Sunlight"]];
var correctAnswers = ["In a funeral pyre", "San Diego", "Valar Dohaeris or 'all men must serve'", "The Chronicles of Narnia", "Sand"];
//var imagesList = [
//	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/dragon-eggs-game-of-thrones.jpg.482x490_q71_crop-smart.jpg'>", 
//	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/iron-throne.jpg.482x490_q71_crop-smart.jpg'>", 
//	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/morghoulis.jpg.482x490_q71_crop-smart.jpg'>", 
//	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/tyrion-lannister.jpg.482x490_q71_crop-smart.jpg'>", 
//	"<img class='center-block img-right' src='https://media.fromthegrapevine.com/assets/images/2016/1/wildfire-game-of-thrones.jpg.482x490_q71_crop-smart.jpg'>"];


// need a counter for win or loose or clock done you duck situation
var win = 0;
var loose = 0;
var youMissTheBus = 0;
//very important to manage all questions and answers via question counter
var questionCounter = 0;
//when user select any answer
var selectedButtonAnswer;
//need a sound when button clicked
//var buttonclickSound = new Audio("sound/button-click.mp3");

//jQuery rapper
$(document).ready(function(){

//text - winter is coming...
$(".mainArea").html("Winter is coming...");
	
//create a button at the begining
var newTriviaButton = $('<button>');
$(newTriviaButton).addClass("btn btn-outline-warning btn-lg btn-block p-2 m-2 newButton2").text("Are you ready for Trivia?");
$("#mainArea").html(newTriviaButton);

//when this button click, do some action
$(".newButton2").on("click", function(event){
	//using prevent Default for loading once
	event.preventDefault();
	//sound
//	buttonclickSound.play();
	//next new page
	generateHTMLPage();
	//time start right after 2 seconds
	timeTracker();
				});

//needs to move this page to next page where trivia start
$("body").on("click", ".answer", function(event){
//	buttonclickSound.play();
	selectedButtonAnswer = $(this).text();
	if ( selectedButtonAnswer === correctAnswers[questionCounter]) {
		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoose();
	}
});

$("body").on("click", ".reset-button", function(event){
//	clickSound.play();
	questionCounter = 0;
	win = 0;
	loose = 0;
	youMissTheBus = 0;
	counter = 15;
	generateHTMLPage();
	timeTracker();
	});
	
}); // close jQuery rapper




//fuctions for generating and adding score

function generateWin() {
	win++;
	//start new set of timer
	var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
	$(".mainArea").html(newHTMLPage);
	//current question
	var questionPage = "<p class='text-center'>"+questionsList[questionCounter]+"</p>";
	$("#mainQuestion").html(questionPage);
	//current question's answer
	var answerPage = "<h3 class='text-center'>Correct! The answer is: <br/><span class='text-warning'>"+correctAnswers[questionCounter]+"</span></h3>"
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
	var questionPage = "<p class='text-center'>"+questionsList[questionCounter]+"</p>";
	$("#mainQuestion").html(questionPage);
	//current question's answer
	var answerPage = "<h3 class='text-center'>Wrong! The correct answer is: <br/><span class='text-warning'>"+correctAnswers[questionCounter]+"</span></h3>"
	$("#mainArea").html(answerPage);
	//once this page is answered, trigger to next page via set time out
	setTimeout(wait, 3000);
}

function clockDoneYouDuck() {
	youMissTheBus++;
	//start new set of timer
	var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
	$(".mainArea").html(newHTMLPage);
	//current question
	var questionPage = "<p class='text-center'>"+questionsList[questionCounter]+"</p>";
	$("#mainQuestion").html(questionPage);
//	//current question's answer
	var answerPage = "<h3 class='text-center'>You ran out of time! The correct answer is:<br/><span class='text-warning'>"+correctAnswers[questionCounter]+"</span></h3>"
	$("#mainArea").html(answerPage);
	
	//once this page is answered, trigger to next page via set time out
	setTimeout(wait, 5000);
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

//createing screen changer once timer or right or wrong answer given which automatically start new timer and new question
function wait() {
	if (questionCounter < 4) {
		questionCounter++;
		generateHTMLPage();
		timer = 15;
		timeTracker();
	}
	else {
		finalScreen();
	}
}
//theClock is the variable that has tic tok for 1 second
var theClock;
// start a 30 / 2 seconds timer at a movement
var timer = 15;
// create a function that actually trigger time
function timeTracker() {
	//theClock is the variable that has tic tok for 1 second
	//fifteenSeconds is the function that make sure if time interval is zero then needs to stop the clock and move to next page
	theClock = setInterval(fifteenSeconds, 1000);
	//fifteenSeconds function
	function fifteenSeconds() {
		if (timer === 0) {
			//clearInterval stops the time getting negative
			clearInterval(theClock);
			//trigger function that gives right answer and move to next page with new time interval
			clockDoneYouDuck();
		}
		if (timer > 0) {
			//timer is decreasing by every one second until hit zero
			timer--;
		}//no else
		//want number in two digits to show up
		var formattedNumber = ("0" + timer).slice(-2);
		//timer to start
		$(".timer").html("<p class='text-left'>Time Remaining 00 : "+formattedNumber+"</p>");
	}
}

//final screen

function finalScreen(){
	$('.hideTrigger').show();
	//start new set of timer
	var newHTMLPage = "<p class='text-right'>All Done! Here's how you did!</p>";
	$(".mainArea").html(newHTMLPage);
	//current question
	var questionPage = "<p class='text-left'>Correct Answers: <span class='text-warning'>"+win+"</span></p><p class='text-left'>Wrong Answers: <span class='text-warning'>"+loose+"</span></p><p class='text-left'>Unanswered: <span class='text-warning'>"+youMissTheBus+"</span></p>";
	$("#mainQuestion").html(questionPage);
	//create a button at the end
	var newResetButton = $('<button>');
	$(newResetButton).addClass("btn btn-outline-warning btn-lg btn-block p-2 m-2 reset-button").text("Reset the Trivia Quiz?");
	$("#mainArea").html(newResetButton);

}



//function for reset game	
	
function resetGame() {
	questionCounter = 0;
	win = 0;
	loose = 0;
	youMissTheBus = 0;
	counter = 15;
	generateHTMLPage();
	timeTracker();
}


//EXTRA

/*
 1. create a sand clock to display
 
 2. what if you create 20 questions but display only 5 questions with MATH.random to select any random 5 questions
 	--BUT-- makesure not repeat same question again in that 5 times
 
 3. what if sequence of all answers of that question are randomly create so if that question pop up for the next round, it has different sequence of the answers
 
 4. If you find a gif for that question related answer, that would be great! that way less reading and get more idea
 
 5. find more challenging Trivia games!!!

*/


