const quoteText = document.querySelector(".quotes");
const generatebtn = document.querySelector(".generate-btn");

const showquotes = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quoteText.innerText = data.content;
    });
};

generatebtn.addEventListener("click", showquotes);
