const container = document.querySelector(".container");
const defaultWhite = [
  129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
  190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
  250, 252, 266, 268, 271, 273,
];

function makeBlock() {
  const div = document.createElement("div");
  div.style.height = "20px";
  div.style.width = "20px";
  div.style.border = "1px solid #E24E3F";
  div.style.zIndex = "1";
  div.style.backgroundColor = "#DE4738";
  div.className = "pixel";
  return div;
}

for (let i = 0; i < 400; i++) {
  container.appendChild(makeBlock());
}

container.addEventListener("click", (e) => {
  let color = e.target.style.backgroundColor;
  let borderColor = e.target.style.borderColor;
  if (color === "rgb(222, 71, 56)") {
    color = "white";
    borderColor = "rgb(255, 255, 255)";
  } else {
    color = "rgb(222, 71, 56)";
    borderColor = "rgb(226, 78, 63)";
  }
  e.target.style.backgroundColor = color;
  e.target.style.borderColor = borderColor;
});

const pixel = document.querySelectorAll(".pixel");
for (let i = 0; i < 400; i++) {
  if (defaultWhite.includes(i)) {
    pixel[i].style.backgroundColor = "white";
    pixel[i].style.borderColor = "rgb(255, 255, 255)";
  }
}

pixel.forEach((px) => {
  px.addEventListener("mouseenter", () => {
    px.style.opacity = "0.9";
  });
});

pixel.forEach((px) => {
  px.addEventListener("mouseleave", () => {
    px.style.opacity = "1";
  });
});
