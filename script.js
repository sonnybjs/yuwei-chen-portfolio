const filterButtons = document.querySelectorAll("[data-filter]");
const projectRows = document.querySelectorAll(".project-row");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("is-active", selected);
      candidate.setAttribute("aria-pressed", String(selected));
    });

    projectRows.forEach((row) => {
      const categories = row.dataset.category.split(" ");
      row.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
