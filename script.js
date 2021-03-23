var selectedButtonAnswer,
  theClock,
  win = 0,
  loose = 0,
  youMissTheBus = 0,
  questionsList = ["How did Daenerys Targaryen eventually hatch her dragon eggs?", "Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?", "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:", "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:", "What is the only thing that can put out volatile Wildfire?"],
  answersList = [
    ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
    ["Chicago", "New York City", "San Diego", "Boston"],
    ["Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "Valar GoGo or 'all men must cry'"],
    ["Lord of the Rings", "Highlander", "The Chronicles of Narnia", "The Legend of Zelda"],
    ["Sand", "Water", "Dragon's blood", "Sunlight"],
  ],
  correctAnswers = ["In a funeral pyre", "San Diego", "Valar Dohaeris or 'all men must serve'", "The Chronicles of Narnia", "Sand"],
  imagesList = ["<img class = 'border border-light rounded' src='https://media.fromthegrapevine.com/assets/images/2016/1/dragon-eggs-game-of-thrones.jpg.482x490_q71_crop-smart.jpg' height='300'>", "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/iron-throne.jpg.482x490_q71_crop-smart.jpg' height='300'>", "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/morghoulis.jpg.482x490_q71_crop-smart.jpg' height='300'>", "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/tyrion-lannister.jpg.482x490_q71_crop-smart.jpg' height='300'>", "<img class = 'border border-light rounded'  src='https://media.fromthegrapevine.com/assets/images/2016/1/wildfire-game-of-thrones.jpg.482x490_q71_crop-smart.jpg' height='300'>"],
  questionCounter = 0;
function generateHTMLPage() {
  $(".hideTrigger").hide();
  $(".mainArea").html("<p class='text-left timer-p timer'>Time Remaining 00 : 15</p>");
  var e = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
  $("#mainQuestion").html(e);
  var t = "<p class='btn btn-lg btn-outline-light answer'>" + answersList[questionCounter][0] + "</p><p class='btn btn-lg btn-outline-light answer'>" + answersList[questionCounter][1] + "</p><p class='btn btn-lg btn-outline-light answer'>" + answersList[questionCounter][2] + "</p><p class='btn btn-lg btn-outline-light answer'>" + answersList[questionCounter][3] + "</p>";
  $("#mainArea").html(t);
}
function generateWin() {
  win++;
  $(".mainArea").html("<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>");
  var e = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
  $("#mainQuestion").html(e);
  var t = "<div class='row'><div class='col-md-4'>" + imagesList[questionCounter] + "</div><h3 class='text-left col-md-8'>You are correct! The answer is: <br/><span class='text-warning'>" + correctAnswers[questionCounter] + "</span></h3></div>";
  $("#mainArea").html(t), setTimeout(wait, 6e3);
}
function generateLoose() {
  loose++;
  $(".mainArea").html("<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>");
  var e = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
  $("#mainQuestion").html(e);
  var t = "<div class='row'><div class='col-md-4'>" + imagesList[questionCounter] + "</div><h3 class='text-left col-md-8'>You are wrong! The correct answer is: <br/><span class='text-warning'>" + correctAnswers[questionCounter] + "</span></h3></div>";
  $("#mainArea").html(t), setTimeout(wait, 6e3);
}
function clockDoneYouDuck() {
  youMissTheBus++;
  $(".mainArea").html("<p class='text-left timer-p timer'>Time Remaining 00 : 00</p>");
  var e = "<p class='text-center'>" + questionsList[questionCounter] + "</p>";
  $("#mainQuestion").html(e);
  var t = "<div class='row'><div class='col-md-4'>" + imagesList[questionCounter] + "</div><h3 class='text-left col-md-8'>You ran out of time! The correct answer is: <br/><span class='text-warning'>" + correctAnswers[questionCounter] + "</span></h3></div>";
  $("#mainArea").html(t), setTimeout(wait, 6e3);
}
function finalScreen() {
  $(".logoGOT").show(), $(".hideTrigger").show();
  $(".mainArea").html("<p class='text-right'>All Done! Here's the Throne!</p>");
  var e = "<p class='text-left'>Correct Answers: <span class='text-warning'>" + win + "</span></p><p class='text-left'>Wrong Answers: <span class='text-warning'>" + loose + "</span></p><p class='text-left'>Unanswered: <span class='text-warning'>" + youMissTheBus + "</span></p>";
  $("#mainQuestion").html(e);
  var t = $("<button>");
  $(t).addClass("btn btn-outline-warning btn-lg btn-block p-2 m-2 reset-button").text("Reset the Trivia Quiz?"), $("#mainArea").html(t);
}
function wait() {
  questionCounter < 4 ? (questionCounter++, generateHTMLPage(), (timer = 15), timeTracker()) : finalScreen();
}
$(document).ready(function () {
  $(".mainArea").html("Winter is coming...");
  var e = $("<button>");
  $(e).addClass("btn btn-outline-warning btn-lg btn-block p-2 m-2 newButton2 m-auto").text("Are you ready?"),
    $("#mainArea").html(e),
    $(".newButton2").on("click", function (e) {
      $(".logoGOT").hide(), e.preventDefault(), generateHTMLPage(), timeTracker();
    }),
    $("body").on("click", ".answer", function (e) {
      e.preventDefault(), (selectedButtonAnswer = $(this).text()) === correctAnswers[questionCounter] ? (clearInterval(theClock), generateWin()) : (clearInterval(theClock), generateLoose());
    }),
    $("body").on("click", ".reset-button", function (e) {
      e.preventDefault(), (questionCounter = 0), (win = 0), (loose = 0), (youMissTheBus = 0), (counter = 15), generateHTMLPage(), timeTracker();
    });
});
var timer = 15;
function timeTracker() {
  theClock = setInterval(function () {
    0 === timer ? (clearInterval(theClock), clockDoneYouDuck()) : timer > 0 && timer--;
    var e = ("0" + timer).slice(-2);
    $(".timer").html("<p class='text-left'>Time Remaining 00 : " + e + "</p>");
  }, 1e3);
}

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/