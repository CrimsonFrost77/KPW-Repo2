document.addEventListener("DOMContentLoaded", function () {
  const projectImage = document.querySelector(".projects-intro-image img");
  const modal = document.getElementById("projectImageModal");
  const modalImg = document.querySelector(".modal-content");

  let scale = 1;
  let panning = false;
  let pointX = 0;
  let pointY = 0;
  let start = { x: 0, y: 0 };

  // Constants
  const ZOOM_SPEED = 0.1;
  const MAX_ZOOM = 4;
  const MIN_ZOOM = 0.5;

  // Create modal content container
  const contentContainer = document.createElement("div");
  contentContainer.className = "modal-content-container";

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.className = "modal-close-btn";
  closeButton.innerHTML = "×";

  // Rearrange modal contents
  while (modal.firstChild) {
    contentContainer.appendChild(modal.firstChild);
  }
  modal.appendChild(contentContainer);
  modal.appendChild(closeButton);

  // Update the transform function to account for centering
  function updateTransform() {
    modalImg.style.transform = `translate(calc(-50% + ${pointX}px), calc(-50% + ${pointY}px)) scale(${scale})`;
  }

  function initModal() {
    scale = 1;
    pointX = 0;
    pointY = 0;
    // Center the image in the container
    modalImg.style.position = "absolute";
    modalImg.style.left = "50%";
    modalImg.style.top = "50%";
    updateTransform();
  }

  function closeModal() {
    modal.style.display = "none";
    initModal();
  }

  // Open modal
  if (projectImage) {
    projectImage.style.cursor = "pointer";
    projectImage.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      initModal();
    });
  }

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target === contentContainer) {
      closeModal();
    }
  });

  // Close button event
  closeButton.addEventListener("click", closeModal);

  // Prevent modal closing when interacting with the image or controls
  modalImg.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Zoom with mouse wheel
  modal.addEventListener("wheel", function (e) {
    e.preventDefault();

    // Get modal container bounds
    const rect = modal.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    // Calculate mouse position relative to the modal container
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate center of container
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Calculate zoom center point relative to the center of container
    const xs = (mouseX - centerX - pointX) / scale;
    const ys = (mouseY - centerY - pointY) / scale;

    // Determine zoom direction
    const delta = -Math.sign(e.deltaY);
    const newScale = Math.min(
      Math.max(MIN_ZOOM, scale + delta * ZOOM_SPEED),
      MAX_ZOOM
    );

    // Update position to zoom towards mouse, relative to center
    pointX = mouseX - centerX - xs * newScale;
    pointY = mouseY - centerY - ys * newScale;

    scale = newScale;
    updateTransform();
  });

  // Pan with mouse drag
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

  // Close modal with escape key
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

  // Add zoom controls
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
});
