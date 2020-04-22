const respond = document.querySelector("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const title = document.querySelector("#title");
const period = document.querySelector("#period");
const genre = document.querySelector("#genre");

respond.addEventListener("submit", e => {
  e.preventDefault();

  document.querySelector(
    "p"
  ).textContent = `Your book is ${title.value} which was written by ${firstName.value} ${lastName.value}. The author wrote during the ${period.value} period in the genre of ${genre.value}.`;
});
firstName.addEventListener("focus", () => {
  console.log("Entered input!");
});

lastName.addEventListener("blur", () => {
  console.log("Left input!");
});

title.addEventListener("keydown", e => {
  console.log(`currently typing in: ${e.target}`);
});

period.addEventListener("focusout", () => {
  console.log("leaving period entry");
});

genre.addEventListener("keyup", () => {
  console.log("entering genre");
});
