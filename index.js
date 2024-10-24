const images = [
  'Assets/Kaliakoir_Pic1.png',
  'Assets/Bangabandhu_hi_tech.png',
  'Assets/Kaliakoir rail.jpg',
  'Assets/Mokhosh_swamp2.png',
  'Assets/ShreefaltaliCourtOfEstate.png',
];

function setRandomHeaderImage() {
  const headerDiv = document.getElementById('dynamic-header');
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  headerDiv.style.backgroundImage = `url('${selectedImage}')`;
}

// Call the function when the page loads
window.onload = setRandomHeaderImage;