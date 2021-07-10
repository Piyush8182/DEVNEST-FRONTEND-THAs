questions = document.querySelector(".questions");
let questionNo = 0;
const ques = [
  {
    q:
      "Internet Explorer (IE) is the flagship browser of which technology company?",
    op1: "Google",
    op2: "Microsoft",
    op3: "Mozilla",
    op4: "Adobe",
    ans: "Microsoft",
  },
  {
    q: "HTML is what type of language ?",
    op1: "Scripting Language",
    op2: "Markup Language",
    op3: "Programming Language",
    op4: "Network Protocol",
    ans: "Markup Language",
  },
  {
    q:
      "In the JavaScript, which one of the following is not considered as an error ?",
    op1: "Syntax error",
    op2: "Missing of semicolons",
    op3: "Division by zero",
    op4: "Missing of Bracket",
    ans: "Division by zero",
  },
];
let score = 0;
const scoreText = document.querySelector(".score-btn");
const nextbtn = document.querySelector(".next-btn");
const restartbtn = document.querySelector(".restart-btn");
function createOptions(q) {
  options = document.createElement("div");
  options.classList.add("options");
  let cnt = 4;
  while (cnt--) {
    option = document.createElement("div");
    option.classList.add("option", "q" + `${q}`);
    op = cnt + 1;
    // console.log("op" + `${op}`);
    option.innerText = ques[q]["op" + `${op}`];
    options.append(option);
  }
  return options;
}
function makeQuestions(q) {
  questions.innerHTML = "";
  question = document.createElement("div");
  question.classList.add("question");
  question.innerText = ques[q].q;
  questions.append(question);
  questions.append(createOptions(q));
  addOptionListener();
  questionNo++;
}

makeQuestions(questionNo);
var optionClick;
function addOptionListener() {
  optionClick = document.querySelectorAll(".option");

  optionClick.forEach((opt) => {
    opt.addEventListener("click", checkAnswer);
  });
}

function checkAnswer() {
  console.log(this.classList[1]);
  let q = this.classList[1][1];
  if (this.innerText == ques[q].ans) {
    this.classList.add("correct");
    score++;
    reveal(this, q);
  } else {
    this.classList.add("wrong");
    reveal(this, q);
  }
}
function reveal(e, q) {
  console.log(e);
  optionClick.forEach((op) => {
    op.classList.add("disable");
    if (op != e) {
      if (op.innerText == ques[q].ans) {
        op.classList.add("correct");
      } else {
        op.classList.add("wrong");
      }
    }
  });
  showScore();
}

// scoreText.addEventListener("click", showScore);

function showScore() {
  scoreText.innerHTML = `Score: ${score} / ${ques.length}`;
}
function nextQues() {
  if (questionNo < ques.length) {
    makeQuestions(questionNo);
  } else {
    nextbtn.innerHTML = "Finished";
    restartbtn.style.visibility = "visible";
  }
}

nextbtn.addEventListener("click", nextQues);
restartbtn.addEventListener("click", () => {
  location.reload();
});
