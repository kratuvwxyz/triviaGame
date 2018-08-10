/*

0.	Game Structure
	
	1. Trivia question between User and Computer
		- win
		- loose
		- youMissTheBus
			- Time over

	2. Computer Set up
		1. 	Questions set up in Arrays
				- Questions
				- Answers
				- Correct Answer according to that question
				- Images according to that answer

		2.	Questions
				- questionCounter
					- need to know when do is the last question
				= wait function
					function wait() {
						//using only 5 questions
						if (questionCounter < 4) 
						{
							questionCounter++;
						} else {
							finalScreen();
						}
					}
				- sound
					- Add button click sound


		3.	body via jQuery
				- using prevent Default for loading once
        			- event.preventDefault();
				- newTriviaButton
					- starting point where quiz starts
						- generateHTMLPage
						- timeTracker
							- start timer after 2 second
				- selectedButtonAnswer
					- check when user clicks is matching with right answer
						- match
							- generate Win
							- stop the clock
						- not matching
							- generate Loss
							- stop the clock

		4.	functions
				- generate HTML
				- generate Win
				- generate Loss
				- generate clockDoneYouDuck
				- generate finalPage

		5. 	Set Timer
				- wait function
					- if questionCounter is less then 5
						- questionCounter++
							- keep going
						- generate HTML
						- set new timer with 15 seconds
						- reset timeTracker
					- else
						- generate finalPage
				- theClock
					- setInterval 
						- timer = 15
							- timer-- every 1000 ms
								- if timer = 0
									- clearInterval theClock
									- generate clockDoneYouDuck
								- else timer > 0
									- keep going
										- timer--

			

				










*/





//game begin

// 1
var win = 0;
var loose = 0;
var youMissTheBus = 0;

// 2.1
var questionsList = ["How did Daenerys Targaryen eventually hatch her dragon eggs?", "Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?", "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:", "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:", "What is the only thing that can put out volatile Wildfire?"];
var answersList = [
    ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
    ["Chicago", "New York City", "San Diego", "Boston"],
    ["Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "Valar GoGo or 'all men must cry'"],
    ["Lord of the Rings", "Highlander", "The Chronicles of Narnia", "The Legend of Zelda"],
    ["Sand", "Water", "Dragon's blood", "Sunlight"]
];
var correctAnswers = ["In a funeral pyre", "San Diego", "Valar Dohaeris or 'all men must serve'", "The Chronicles of Narnia", "Sand"];
var imagesList = [
    "<img class = 'border border-light rounded' src='https://media.fromthegrapevine.com/assets/images/2016/1/dragon-eggs-game-of-thrones.jpg.482x490_q71_crop-smart.jpg' height='300'>",
    "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/iron-throne.jpg.482x490_q71_crop-smart.jpg' height='300'>",
    "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/morghoulis.jpg.482x490_q71_crop-smart.jpg' height='300'>",
    "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/tyrion-lannister.jpg.482x490_q71_crop-smart.jpg' height='300'>",
    "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/wildfire-game-of-thrones.jpg.482x490_q71_crop-smart.jpg' height='300'>"
];

// 2.2
var questionCounter = 0;

var selectedButtonAnswer;

// sound
// var buttonclickSound = new Audio("");

// 2.3
$(document).ready(function() {

    //text - winter is coming...
    $(".mainArea").html("Winter is coming...");

    //create a button at the begining
    var newTriviaButton = $('<button>');
    $(newTriviaButton).addClass("btn btn-outline-warning btn-lg btn-block p-2 m-2 newButton2").text("Are you ready for Trivia?"); //added newButton2
    $("#mainArea").html(newTriviaButton);

    $(".newButton2").on("click", function(event) {
        event.preventDefault();
        //	buttonclickSound.play();
        generateHTMLPage();
        timeTracker();
    });

    $("body").on("click", ".answer", function(event) {
        event.preventDefault();
        //	buttonclickSound.play();
        selectedButtonAnswer = $(this).text();
        if (selectedButtonAnswer === correctAnswers[questionCounter]) {
            clearInterval(theClock);
            generateWin();
        } else {
            clearInterval(theClock);
            generateLoose();
        }
    });

    $("body").on("click", ".reset-button", function(event) {
        event.preventDefault();
        //	buttonclickSound.play();
        questionCounter = 0;
        win = 0;
        loose = 0;
        youMissTheBus = 0;
        counter = 15;
        generateHTMLPage();
        timeTracker();
    });

}); // close jQuery rapper

// 2.4

// html
function generateHTMLPage() {
    $('.hideTrigger').hide();
    //start new set of timer
    var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 15</p>";
    $(".mainArea").html(newHTMLPage);
    //new question
    var questionPage = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
    $("#mainQuestion").html(questionPage);
    //new answers related to that question 
    //answerlist [first array select group of array] [second array select answer by sequence number]
    var answerPage = "<p class='btn btn-lg btn-block btn-outline-light answer'>" + answersList[questionCounter][0] + "</p><p class='btn btn-lg btn-block btn-outline-light answer'>" + answersList[questionCounter][1] + "</p><p class='btn btn-lg btn-block btn-outline-light answer'>" + answersList[questionCounter][2] + "</p><p class='btn btn-lg btn-block btn-outline-light answer'>" + answersList[questionCounter][3] + "</p>";
    $("#mainArea").html(answerPage);
}


// win
function generateWin() {
    win++;
    //start new set of timer
    var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
    $(".mainArea").html(newHTMLPage);
    //current question
    var questionPage = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
    $("#mainQuestion").html(questionPage);
    //current question's answer
    var answerPage = "<div class='row'><div class='col-md-4'>" + imagesList[questionCounter] + "</div><h3 class='text-left col-md-8'>You are correct! The answer is: <br/><span class='text-warning'>" + correctAnswers[questionCounter] + "</span></h3></div>"
    $("#mainArea").html(answerPage);
    //once this page is answered, trigger to next page via set time out
    setTimeout(wait, 6000);
}

// loss
function generateLoose() {
    loose++;
    //start new set of timer
    var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
    $(".mainArea").html(newHTMLPage);
    //current question
    var questionPage = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
    $("#mainQuestion").html(questionPage);
    //current question's answer
    var answerPage = "<div class='row'><div class='col-md-4'>" + imagesList[questionCounter] + "</div><h3 class='text-left col-md-8'>You are wrong! The correct answer is: <br/><span class='text-warning'>" + correctAnswers[questionCounter] + "</span></h3></div>"
    $("#mainArea").html(answerPage);
    //once this page is answered, trigger to next page via set time out
    setTimeout(wait, 6000);
}

// timeOver
function clockDoneYouDuck() {
    youMissTheBus++;
    //start new set of timer
    var newHTMLPage = "<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>";
    $(".mainArea").html(newHTMLPage);
    //current question
    var questionPage = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
    $("#mainQuestion").html(questionPage);
    //	//current question's answer
    var answerPage = "<div class='row'><div class='col-md-4'>" + imagesList[questionCounter] + "</div><h3 class='text-left col-md-8'>You ran out of time! The correct answer is: <br/><span class='text-warning'>" + correctAnswers[questionCounter] + "</span></h3></div>"
    $("#mainArea").html(answerPage);
    //once this page is answered, trigger to next page via set time out
    setTimeout(wait, 6000);
}

//final screen
function finalScreen() {
    $('.hideTrigger').show();
    //start new set of timer
    var newHTMLPage = "<p class='text-right'>All Done! Here's the Throne!</p>";
    $(".mainArea").html(newHTMLPage);
    //current question
    var questionPage = "<p class='text-left'>Correct Answers: <span class='text-warning'>" + win + "</span></p><p class='text-left'>Wrong Answers: <span class='text-warning'>" + loose + "</span></p><p class='text-left'>Unanswered: <span class='text-warning'>" + youMissTheBus + "</span></p>";
    $("#mainQuestion").html(questionPage);
    //create a button at the end
    var newResetButton = $('<button>');
    $(newResetButton).addClass("btn btn-outline-warning btn-lg btn-block p-2 m-2 reset-button").text("Reset the Trivia Quiz?");
    $("#mainArea").html(newResetButton);

}

// 2.5

function wait() {
    if (questionCounter < 4) {
        questionCounter++;
        generateHTMLPage();
        timer = 15;
        timeTracker();
    } else {
        finalScreen();
    }
}

var theClock;

var timer = 15;

function timeTracker() {
    theClock = setInterval(fifteenSeconds, 1000);

    function fifteenSeconds() {
        if (timer === 0) {
            clearInterval(theClock);
            clockDoneYouDuck();
        } else if (timer > 0) {
            timer--;
        }
        //want number in two digits to show up
        var formattedNumber = ("0" + timer).slice(-2);
        //timer to start
        $(".timer").html("<p class='text-left'>Time Remaining 00 : " + formattedNumber + "</p>");
    }
}