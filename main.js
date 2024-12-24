const answer = prompt("What is your name?");

console.log(`Hi ${answer}, welcome to the ultimate christmas pub quiz`);

const userAnswer = prompt("Would you like to play?");

let firstAnswer;

const firstQuestion = prompt("What is the name of Santas favroiute reindeer?");

if (userAnswer.toUpperCase() === "Y") {
  firstQuestion;
} else if (userAnswer.toUpperCase() === "N") {
  alert(
    `Okay ${answer}, your game has been cancelled, please refresh the page to restart`
  );
}
let score = 0;
if ((firstQuestion.toLowerCase = "rudolf")) {
  score++;
  console.log(
    `${firstQuestion} was the correct answer! You get one point. Your score is now ${score}`
  );
} else {
  console.log(
    `${firstQuestion} was the incorrect answer! You get 0 points. Your score is now ${score}`
  );
}

// * display the question number and question
// * get the user's answer to the question
// * check if the user's answer is correct or not.
// * when a user gives a correct answer, they should get 1 point and the system should display a message that lets the user know:
//     * their answer was correct
//     * they've gained a point
//     * what their new score is
// * when a user gives an incorrect answer, they should not get any points for the current question and the system should display a message that lets the user know:
//     * their answer was incorrect
//     * what their score is
// Finally, at the end of the quiz, once all of the questions have been displayed and answered, the system should display a message that lets the user know their final score, including how many questions they answered correctly and how many questions were asked in total.
