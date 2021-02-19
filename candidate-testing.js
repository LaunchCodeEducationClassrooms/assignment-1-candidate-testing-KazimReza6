const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let correctAnswer = "";
let candidateAnswer = "";
let questions = "";
let correctAnswers = "";
let candidateAnswers = "";
let question2 = "";
let candidateAnswer2 = "";
let correctAnswer2 = "";
let question3 = "";
let candidateAnswer3 = "";
let correctAnswer3 = "";
let question4 = "";
let candidateAnswer4 = "";
let correctAnswer4 = "";
let question5 = "";
let candidateAnswer5 = "";
let correctAnswer5 = "";



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your Name: ");
console.log(`Hello ${candidateName}.\nWelcome to LaunchCode Independent learning track \nPlease answer the following questions\n****`);
}



function askQuestion() {
  question = "Who was the first American woman in space? ";
  correctAnswer = 'Sally Ride';
  question2 = 'True or false: 5000 meters = 5 kilometers. ';
  correctAnswer2 = 'True';
  question3 = '(5 + 3)/2 * 10 = ?';
  correctAnswer3 = '40';
  question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
  correctAnswer4 = 'Trajectory';
  question5 = 'What is the minimum crew size for the ISS?';
  correctAnswer5 = "3";

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question("\n1) " + question + "\nYour Answer: ");
  console.log("Correct Answer: " + correctAnswer);
  candidateAnswer2 = input.question("\n2) " + question2 + "\nYour Answer: ");
  console.log("Correct Answer: " + correctAnswer2);
  candidateAnswer3 = input.question("\n3) " + question3 + "\nYour Answer: ");
  console.log("Correct Answer: " + correctAnswer3);
  candidateAnswer4 = input.question("\n4) " + question4 + "\nYour Answer: ");
  console.log("Correct Answer: " + correctAnswer4);
  candidateAnswer5 = input.question("\n5) " + question5 + "\nYour Answer: ");
  console.log("Correct Answer: " + correctAnswer5);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  candidateAnswer1 = candidateAnswer.toLowerCase();
  correctAnswer1 = correctAnswer.toLowerCase();
  candidateAnswer21 = candidateAnswer2.toLowerCase();
  correctAnswer21 = correctAnswer2.toLowerCase();
  candidateAnswer41 = candidateAnswer4.toLowerCase();
  correctAnswer41 = correctAnswer4.toLowerCase();
 
  let right = 0;
  let score = 0;
  if (correctAnswer1 === candidateAnswer1) {
    right = right + 1;
  }
   if (correctAnswer21 === candidateAnswer21) {
    right = right + 1;
  } 
  if (correctAnswer3 === candidateAnswer3) {
    right = right + 1;
  } 
  if (correctAnswer41 === candidateAnswer41) {
    right = right + 1;
  } 
  if (correctAnswer5 === candidateAnswer5) {
    right = right + 1;
  }
  score = (right/5)*100;
  if (score >= 80) {
    console.log(`\n>>> Overall Grad: ${score}% (${right} out of 5 correct) <<<\n>>> Status: PASSED <<<`)
  } else {
    console.log(`\n>>> Overall Grad: ${score}% (${right} out of 5 correct) <<<\n>>> Status: FAILED <<<`);
  }

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};