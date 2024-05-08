const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", () => {
  modal.classList.add("active");
});

modal.addEventListener("click", (e) => {
  if (e.target.matches(".modal") || !e.target.closest(".modal-content")) {
    modal.classList.remove("active");
  }
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
