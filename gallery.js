document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modalCaption = document.getElementById("modalCaption");

  // Create and append modal image if it doesn't exist
  let modalImg = document.createElement("img");
  modalImg.className = "modal-content";
  modal.insertBefore(modalImg, modalCaption);

  // Add click handlers to each gallery thumbnail
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.querySelector("img").src;
      modalCaption.textContent =
        this.querySelector(".gallery-caption").textContent;
    });
  });

  // Close modal when clicking anywhere on it
  modal.addEventListener("click", function (e) {
    // Only close if clicking on the modal background, not the image
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Prevent scrolling when modal is open
  modal.addEventListener("wheel", function (e) {
    e.preventDefault();
  });

  // Add keyboard support
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });
});
