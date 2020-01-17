// total questions we are using for this app
let totalQuestions = 5;
// questions are
let questions = [
  "One Qustion",
  "Two Qustion",
  "Three Qustion",
  "Four Qustion",
  "Five Qustion"
];
// answers are
let answers = [
  ["one answer", "two answer", "three answer", "four answer"],
  ["one answer", "two answer", "three answer", "four answer"],
  ["one answer", "two answer", "three answer", "four answer"],
  ["one answer", "two answer", "three answer", "four answer"],
  ["one answer", "two answer", "three answer", "four answer"]
];
// correct answer is
let correctQuestionAnswer = [
  "two answer",
  "one answer",
  "four answer",
  "two answer",
  "four answer"
];
// result 
let correctAnswer = 0;
let wrongAnswer = 0;
let missedAnswer = 0;
// time in seconds 
let time = 30;
// current question when game start
let newQuestion = -1;

//
// document ready
$(document).ready(function () {
  // first hiding restart button
  $("#restart").hide();
  // show only startbutton with adding class
  $("#start").addClass('btn-danger');
  // on click start button
  // using event preventDefault
  $("#start").on("click", function (event) {
    event.preventDefault();
    $("#start").hide();
    nextQuestion();
    timeTracker();
  });
  // on click answer class
  // using event preventDefault
  $(document).on("click", ".answerCheck", function (event) {
    event.preventDefault();
    // if this selected 
    let answerSelected = $(this).text();
    // compairing with correct answer
    if (answerSelected === correctQuestionAnswer[newQuestion]) {
      // if it's correct then add in correct
      correctAnswer++;
      // check if any questions left
      checkIfAnyLeft();
    } else {
      // if it's not correct then add in wrong
      wrongAnswer++;
      // check if any questions left
      checkIfAnyLeft();
    }
  });
  //
  // on restart click when game over and see the result you need to restart the game
  $("#restart").on('click', function (event) {
    // using event preventDefault
    event.preventDefault();
    // when click hide it 
    $("#restart").hide();
    // reset everything to normal
    totalQuestions = 5;
    correctAnswer = 0;
    wrongAnswer = 0;
    missedAnswer = 0;
    time = 30;
    newQuestion = -1;
    // empty out so it shows new result next time
    $('#correct').empty();
    $('#wrong').empty();
    $('#missed').empty();
    // start with new question and time tracker
    nextQuestion();
    timeTracker();
  });
});
//
// nextQuestion function
function nextQuestion() {
  // first, take one from totalQuestion for counting how many questions left
  totalQuestions--;
  // second, add one to newQuestion for next question
  newQuestion++;
  // empty out current question and answer
  $('#question').empty();
  $('#answers').empty();
  // make sure time starts at 30
  time = 30;
  // adding new question and bootstrap style
  $("#question").text(questions[newQuestion]).addClass('h3 col-12 p-4');
  // adding answers according that question and bootstrap style
  // using for loop
  for (let i = 0; i < answers[newQuestion].length; i++) {
    // makesure every button has answerCheck
    let newDiv = $("<button>").addClass('answerCheck');
    $(newDiv).text(answers[newQuestion][i]).addClass('h4 col-12 p-2 bg-light btn btn-light');
    $("#answers").append(newDiv);
  }
}
// 
// time tracker function
// t = for setting time interaval and let to reset later
let t;
// time tracker funciton
function timeTracker() {
  // time interval run thirtySec function in every one second
  t = setInterval(thirtySec, 1000);
}
// running set and clear interval using thirtySec funciton
function thirtySec() {
  // if time become zero then 
  if (time === 0) {
    // clear interval stop the clock when thirty second over
    clearInterval(t);
    // you missed the answer which add to missedAnswer
    missedAnswer++;
    // check if any questions left
    checkIfAnyLeft();
  } else if (time > 0) {
    // if time is not zero then run this function. one way to loop with time
    time--;
  }
  // display time and bootstrap style
  $("#time").text("Time : " + time + " seconds left").addClass("text-danger col-12");
}
//
// checkIfAnyLeft function
function checkIfAnyLeft() {
  // clear interval when check if any question left to stop the clock
  clearInterval(t);
  // if total questions are not zero
  if (totalQuestions > 0) {
    // display next question
    nextQuestion();
    // start time
    timeTracker();
  } else if (totalQuestions === 0) {
    // if all questions done then show the last page with results
    finalPage();
  }
}
//
// finalPage function
function finalPage() {
  // show restart button
  $("#restart").show().addClass('btn-danger');
  // show results
  $('#correct').text("Correct Answers : " + correctAnswer).addClass('col-12 p-3');
  $('#wrong').text("Wrong Answers : " + wrongAnswer).addClass('col-12 p-3');
  $('#missed').text("Missed Answers : " + missedAnswer).addClass('col-12 p-3');
  // emptyout last question, answers and time
  $('#question').empty();
  $('#answers').empty();
  $('#time').empty();
  console.log(correctAnswer);
  console.log(wrongAnswer);
  console.log(missedAnswer);
}

// This is it!