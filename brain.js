
function getHighlightedCode(string) {
  return Prism.highlight(string, Prism.languages.javascript, 'javascript');
}

let QUESTIONS_SEEN = [];
let QUESTION_NUMBER = 0;

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

function formatAns(answer) {
  let backtick_escp = "ijowpiruwpioru";
  let backtick_escp_regex = /ijowpiruwpioru/g;
  let escaped = answer.replace(/\\`/g, backtick_escp);

  let backtick_positions = [];

  for (let i = 0; i < escaped.length; ++i) {
    if (escaped[i] === '`') {
      backtick_positions.push(i);
    }
  }

  let formatted_string = "";
  let code_udders = [];

  for (let i = 0; i < backtick_positions.length; i += 2) {
    let btick1 = backtick_positions[i], btick2 = backtick_positions[i + 1];

    code_udders.push(getHighlightedCode(escaped.slice(btick1+1, btick2)));
  }

  let prev_indx = -1;

  for (let i = 0; i < backtick_positions.length; i += 2) {
    let indx = backtick_positions[i];

    formatted_string += (escaped.slice(prev_indx + 1, indx));
    formatted_string += "<span class='code_block'>" + code_udders[i] + "</span>";

    prev_indx = backtick_positions[i+1];
  }

  formatted_string += escaped.slice(prev_indx + 1);

  console.log(escaped, backtick_positions, formatted_string, code_udders);

  return formatted_string.replace(backtick_escp_regex, "`");
}

function displayQuestion(question) {
  if (!question) return;

  document.getElementById("qn").innerText = QUESTION_NUMBER;
  document.getElementsByClassName("question_content")[0].innerText = question.content;

  let code_block = document.getElementById("code_block");

  if (question.code) {
    code_block.innerHTML = getHighlightedCode(question.code);
  } else {
    code_block.innerHTML = '';
  }

  if (question.type === "mult") {
    document.getElementById("frsp").innerHTML = '';

    let answer_buttons_html = question.possible_answers.map((answer, index) =>
      `<input type="radio" name="answers" name="${index}" value="${index}" class="answer_buttons">
      <label for="${index}">${formatAns(answer)}</label>`).join("<br>");
    document.getElementById("answers").innerHTML = answer_buttons_html;
  } else {
    document.getElementById("answers").innerHTML = '';
    document.getElementById("frsp").innerHTML = '<textarea name="Response" id="free_resp"></textarea>';
  }
}


let CURRENT_DIFFICULTY = 0;
let CURRENT_QUESTION;

nextQuestion();

function nextQuestion(gotCorrect = "yes") {
  console.log("State: " + gotCorrect);
  switch (gotCorrect) {
    case "yes":
      CURRENT_DIFFICULTY += 1;
      break;
    case "no":
      CURRENT_DIFFICULTY -= 1;
      break;
    case "giveup":
      CURRENT_DIFFICULTY -= 0.4;
      break;
  }

  CURRENT_QUESTION = getQuestion(CURRENT_DIFFICULTY);
  QUESTION_NUMBER++;

  if (!CURRENT_QUESTION) {
    alert("No more questions! You ended at difficulty " + CURRENT_DIFFICULTY);
  }

  displayQuestion(CURRENT_QUESTION);
}

function giveup() {
  nextQuestion("giveup");
}

function submit() {
  if (CURRENT_QUESTION.type === "mult") {
    let buttons = Array.from(document.getElementsByClassName("answer_buttons"));
    let checked = -1;

    for (let i = 0; i < buttons.length; ++i) {
      if (buttons[i].checked) {
        checked = i;
      }
    }

    if (checked === -1) {
      alert("Please enter an answer or give up.");
    }

    if (CURRENT_QUESTION.correct_answers.includes(checked)) {
      nextQuestion("yes");
    } else {
      nextQuestion("no");
    }
  } else {
    let response = document.getElementById("free_resp").value.trim();

    if (CURRENT_QUESTION.correct_answers.includes(response)) {
      nextQuestion("yes");
    } else {
      nextQuestion("no");
    }
  }
}

function restart() {
  QUESTIONS_SEEN = []
  QUESTION_NUMBER = 0;
  CURRENT_DIFFICULTY = 0;
  CURRENT_QUESTION = undefined;

  nextQuestion();
}
