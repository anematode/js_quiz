
function getHighlightedCode(string) {
  return Prism.highlight(string, Prism.languages.javascript, 'javascript');
}

let QUESTIONS_SEEN = [];
let QUESTION_NUMBER = 1;

const QUESTIONS = [
  {difficulty: 0, type: "free", content: "What will the following code output?", code: `console.log("5");`, correct_answers: ["5"]},
  {difficulty: 0, type: "mult", content: "What will the following code output?", code: `console.log("5");`, possible_answers: ["`0`", "`1`", "`3`", "`5`", "implementation-defined"], correct_answers: [3]}
];

function getQuestion(approx_difficulty = 0, variance = 1) {
  let best_question;
  let best_question_index;
  let desired_difficulty = approx_difficulty + (Math.random() * 2 - 1) * variance;
  let closest_delta = Infinity;

  for (let i = 0; i < QUESTIONS.length; ++i) {
    if (QUESTIONS_SEEN[i]) continue;

    let question = QUESTIONS[i];
    let difficulty_delta = Math.abs(question.difficulty - desired_difficulty);

    if (difficulty_delta < closest_delta) {
      closest_delta = difficulty_delta;
      best_question = question;
      best_question_index = i;
    }
  }

  if (!best_question) {
    return null;
  }

  QUESTIONS_SEEN[best_question_index] = true;
  return best_question;
}

function displayQuestion(question) {
  document.getElementById("qn").innerText = QUESTION_NUMBER;
  document.getElementsByClassName("question_content")[0].innerText = question.content;

  let code_block = document.getElementsByClassName("code")[0];
  code_block.removeChild(code_block.firstChild);

  if (question.code) {
    code_block.appendChild(getHighlightedCode(question.code));
  }

  if (question.type === "mult") {
    document.getElementById("frsp").innerHTML = '';
    document.getElementById("mult").innerHTML = question.possible_answers.map((answer, index) => {
      `<input type="radio" name="answers" name="${index}" value="${index}">
      <label for="${index}">${answer}</label>`}).join("\n");
  } else {
    document.getElementById("mult").innerHTML = '';
    document.getElementById("frsp").innerHTML = '<input type="text"></input>';
  }
}
