const seatingArea = document.querySelector(".seating-area");
function makeSeat() {
  const div = document.createElement("div");
  // div.style.height = "15%";
  // div.style.width = "15%";
  div.className = "seat";
  div.style.backgroundColor = "#793322c7";
  div.style.zIndex = "1";
  div.style.borderRadius = "2px";
  return div;
}

for (let i = 0; i < 36; i++) {
  seatingArea.appendChild(makeSeat());
}

const seats = document.querySelectorAll(".seat");

const bookedSeatsElement = document.querySelector(".booked-seats");
const remainingSeatsElement = document.querySelector(".remaining-seats");

let bookedSeats = 0;
let remainingSeats = seats.length;
let spray = false;

bookedSeatsElement.textContent = bookedSeats;
remainingSeatsElement.textContent = remainingSeats;

seats.forEach(function (seat) {
  seat.addEventListener("mousedown", function (event) {
    spray = true;
    seat.classList.toggle("booked");
    seat.classList.contains("booked") ? bookSeats() : unBookSeats();
  });
  seat.addEventListener("mouseup", function (event) {
    spray = false;
  });
  seat.addEventListener("mouseover", function (event) {
    // console.log(spray);
    if (spray) {
      seat.classList.toggle("booked");
      seat.classList.contains("booked") ? bookSeats() : unBookSeats();
    }
  });
});

function bookSeats() {
  bookedSeats += 1;
  remainingSeats -= 1;

  bookedSeatsElement.textContent = bookedSeats;
  remainingSeatsElement.textContent = remainingSeats;
}
function unBookSeats() {
  bookedSeats -= 1;
  remainingSeats += 1;

  bookedSeatsElement.textContent = bookedSeats;
  remainingSeatsElement.textContent = remainingSeats;
}
// seatingArea.addEventListener('mousedown', (e)=>{
//   let color = e.target.style.backgroundColor();
//   e.target.style.backgroundColor = "white";
// })

// const seat = document.querySelectorAll('.seat');

// seat.forEach((px) => {
//   px.addEventListener("mousedown", () => {
//     px.style.opacity = "0.5";
//   });
// });

// seat.forEach((px) => {
//   px.addEventListener("mouseover", () => {
//     px.style.opacity = "1";
//   });
// });
