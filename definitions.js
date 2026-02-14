const terms = document.querySelectorAll(".term");
const descriptions = document.querySelectorAll(".description");
const searchInput = document.getElementById("searchInput");
const toggleBtn = document.getElementById("toggleBtn");

let allOpened = false;

/* Раскрытие по клику */
terms.forEach((term) => {
  term.addEventListener("click", () => {
    const description = term.nextElementSibling;
    description.classList.toggle("open");
  });
});

/* Поиск */
searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  document.querySelectorAll(".definition").forEach((def) => {
    const text = def.innerText.toLowerCase();
    def.style.display = text.includes(value) ? "block" : "none";
  });
});

/* Кнопка раскрыть/скрыть все */
toggleBtn.addEventListener("click", () => {
  allOpened = !allOpened;

  descriptions.forEach((desc) => {
    if (allOpened) {
      desc.classList.add("open");
      toggleBtn.textContent = "Скрыть все";
    } else {
      desc.classList.remove("open");
      toggleBtn.textContent = "Раскрыть все";
    }
  });
});
