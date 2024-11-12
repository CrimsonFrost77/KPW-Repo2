document.addEventListener("DOMContentLoaded", function () {
  // Select all clickable images
  const projectImages = document.querySelectorAll(
    ".projects-intro-image img, .image-row img"
  );
  const modal = document.getElementById("projectImageModal");
  let modalImg;

  // Create modal content if it doesn't exist
  if (!modal.querySelector(".modal-content")) {
    modalImg = document.createElement("img");
    modalImg.className = "modal-content";
    const contentContainer = document.createElement("div");
    contentContainer.className = "modal-content-container";
    contentContainer.appendChild(modalImg);
    modal.appendChild(contentContainer);
  } else {
    modalImg = modal.querySelector(".modal-content");
  }

  let scale = 1;
  let panning = false;
  let pointX = 0;
  let pointY = 0;
  let start = { x: 0, y: 0 };

  // Constants
  const ZOOM_SPEED = 0.1;
  const MAX_ZOOM = 4;
  const MIN_ZOOM = 0.5;

  // Create modal content container if it doesn't exist
  let contentContainer = modal.querySelector(".modal-content-container");
  if (!contentContainer) {
    contentContainer = document.createElement("div");
    contentContainer.className = "modal-content-container";
    while (modal.firstChild) {
      contentContainer.appendChild(modal.firstChild);
    }
    modal.appendChild(contentContainer);
  }

  // Create close button if it doesn't exist
  if (!modal.querySelector(".modal-close-btn")) {
    const closeButton = document.createElement("button");
    closeButton.className = "modal-close-btn";
    closeButton.innerHTML = "×";
    modal.appendChild(closeButton);

    // Close button event
    closeButton.addEventListener("click", closeModal);
  }

  // Update the transform function to account for centering
  function updateTransform() {
    modalImg.style.transform = `translate(calc(-50% + ${pointX}px), calc(-50% + ${pointY}px)) scale(${scale})`;
  }

  function initModal() {
    scale = 1;
    pointX = 0;
    pointY = 0;
    modalImg.style.position = "absolute";
    modalImg.style.left = "50%";
    modalImg.style.top = "50%";
    updateTransform();
  }

  function closeModal() {
    modal.style.display = "none";
    initModal();
  }

  // Add click event to all project images
  projectImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      initModal();
    });
  });

  // Rest of the modal functionality remains the same
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target === contentContainer) {
      closeModal();
    }
  });

  modalImg.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Zoom with mouse wheel
  modal.addEventListener("wheel", function (e) {
    e.preventDefault();
    const rect = modal.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const xs = (mouseX - centerX - pointX) / scale;
    const ys = (mouseY - centerY - pointY) / scale;
    const delta = -Math.sign(e.deltaY);
    const newScale = Math.min(
      Math.max(MIN_ZOOM, scale + delta * ZOOM_SPEED),
      MAX_ZOOM
    );
    pointX = mouseX - centerX - xs * newScale;
    pointY = mouseY - centerY - ys * newScale;
    scale = newScale;
    updateTransform();
  });

  // Pan functionality
  modal.addEventListener("mousedown", function (e) {
    if (e.target === modal || e.target === contentContainer) return;
    e.preventDefault();
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    panning = true;
    modal.classList.add("grabbing");
  });

  modal.addEventListener("mousemove", function (e) {
    e.preventDefault();
    if (!panning) return;
    pointX = e.clientX - start.x;
    pointY = e.clientY - start.y;
    updateTransform();
  });

  modal.addEventListener("mouseup", function () {
    panning = false;
    modal.classList.remove("grabbing");
  });

  modal.addEventListener("mouseleave", function () {
    panning = false;
    modal.classList.remove("grabbing");
  });

  // Close with escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });

  // Double click to reset zoom
  modal.addEventListener("dblclick", function (e) {
    if (e.target === modal || e.target === contentContainer) return;
    scale = 1;
    pointX = 0;
    pointY = 0;
    updateTransform();
  });

  // Add zoom controls if they don't exist
  if (!modal.querySelector(".zoom-controls")) {
    const zoomControls = document.createElement("div");
    zoomControls.className = "zoom-controls";
    zoomControls.innerHTML = `
        <button class="zoom-btn zoom-reset">↺</button>
      `;
    modal.appendChild(zoomControls);

    // Zoom button functionality
    const zoomReset = modal.querySelector(".zoom-reset");

    zoomReset.addEventListener("click", function (e) {
      e.stopPropagation();
      scale = 1;
      pointX = 0;
      pointY = 0;
      updateTransform();
    });

    // Prevent zoom controls from closing modal
    zoomControls.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
});
