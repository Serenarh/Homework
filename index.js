respond.addEventListener("submit", e => {
  e.preventDefault();

  document.querySelector(
    "p"
  ).textContent = `Your book is ${title.value} which was written by ${firstName.value} ${lastName.value}.\n The author wrote during the ${period.value} period in the genre of ${genre.value}.`;
});
