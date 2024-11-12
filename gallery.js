document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modalImg = modal.querySelector(".modal-content");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDescription = modal.querySelector(".modal-description");
  const modalDetails = modal.querySelector(".modal-details");
  const closeButton = modal.querySelector(".modal-close");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.querySelector("img").src;

      // Get data from hidden div
      const imageData = this.querySelector(".image-data");
      if (imageData) {
        modalTitle.textContent = imageData.querySelector("h2").textContent;
        modalDescription.textContent = imageData.querySelector("p").textContent;
        modalDetails.innerHTML = imageData.querySelector(".details").innerHTML;
      }
    });
  });

  // Close modal when clicking the close button
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal with escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});
