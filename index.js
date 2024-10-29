const images = [
  'Assets/Picture/Kaliakoir_Pic1.webp',
  'Assets/Picture/Bangabandhu_hi_tech.webp',
  'Assets/Picture/Kaliakoir rail.webp',
  'Assets/Picture/Mokhosh_swamp2.webp',
  'Assets/Picture/ShreefaltaliCourtOfEstate.webp',
];

function setRandomHeaderImage() {
  const headerDiv = document.getElementById('dynamic-header');
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  headerDiv.style.backgroundImage = `url('${selectedImage}')`;
}

// Call the function when the page loads
window.onload = setRandomHeaderImage;