document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Open modal when clicking on gallery items
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.querySelector("img").src;
      modalCaption.textContent =
        this.querySelector(".gallery-caption").textContent;
    });
  });

  // Close modal when clicking anywhere on it
  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Prevent scrolling when modal is open
  modal.addEventListener("wheel", function (e) {
    e.preventDefault();
  });

  // Handle keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });
});
