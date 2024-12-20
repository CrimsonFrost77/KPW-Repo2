document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modalImg = modal.querySelector(".modal-content");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDescription = modal.querySelector(".modal-description");
  const modalDetails = modal.querySelector(".modal-details");
  const closeButton = modal.querySelector(".modal-close");
  const prevBtn = modal.querySelector(".prev-btn");
  const nextBtn = modal.querySelector(".next-btn");
  const imageCounter = modal.querySelector(".image-counter");

  let currentAlbum = [];
  let currentIndex = 0;

  function showImage(index) {
    modalImg.src = currentAlbum[index].src;
    updateImageCounter();
  }

  function updateImageCounter() {
    if (currentAlbum.length > 0) {
      imageCounter.textContent = `${currentIndex + 1} / ${currentAlbum.length}`;
    }
  }

  function toggleModalScrolling(isOpen) {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }
  // Close modal handlers
  function closeModal() {
    modal.style.display = "none";
    toggleModalScrolling(false);
    // Reset current album and index
    currentAlbum = [];
    currentIndex = 0;
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "block";
      toggleModalScrolling(true);

      // Check if this is an album
      const albumImages = this.querySelector(".album-images");
      if (albumImages) {
        // Handle album view
        currentAlbum = Array.from(albumImages.getElementsByTagName("img"));
        currentIndex = 0;
        showImage(currentIndex);

        // Show navigation if multiple images
        if (currentAlbum.length > 1) {
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
          imageCounter.style.display = "block";
        }
      } else {
        // Handle single image view
        modalImg.src = this.querySelector("img").src;
        currentAlbum = [];
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
        imageCounter.style.display = "none";
      }

      // Get data from hidden div
      const imageData = this.querySelector(".image-data");
      if (imageData) {
        modalTitle.textContent = imageData.querySelector("h2").textContent;
        modalDescription.textContent = imageData.querySelector("p").textContent;
        modalDetails.innerHTML = imageData.querySelector(".details").innerHTML;
      }
    });
  });

  // Navigation event listeners
  prevBtn?.addEventListener("click", function (e) {
    e.stopPropagation();
    if (currentAlbum.length > 0) {
      currentIndex =
        (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
      showImage(currentIndex);
    }
  });

  nextBtn?.addEventListener("click", function (e) {
    e.stopPropagation();
    if (currentAlbum.length > 0) {
      currentIndex = (currentIndex + 1) % currentAlbum.length;
      showImage(currentIndex);
    }
  });

  // close button event listener
  closeButton.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    },
    { passive: false }
  ); // Add passive: false for better touch handling

  // Add touch event listener specifically for mobile
  closeButton.addEventListener(
    "touchend",
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    },
    { passive: false }
  );

  //  escape key handler
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (modal.style.display === "block") {
      if (e.key === "Escape") {
        closeModal();
      }
      if (currentAlbum.length > 0) {
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
      }
    }
  });
});
