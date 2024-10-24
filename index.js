const images = [
  'Assets/Picture/Kaliakoir_Pic1.png',
  'Assets/Picture/Bangabandhu_hi_tech.png',
  'Assets/Picture/Kaliakoir rail.jpg',
  'Assets/Picture/Mokhosh_swamp2.png',
  'Assets/Picture/ShreefaltaliCourtOfEstate.png',
];

function setRandomHeaderImage() {
  const headerDiv = document.getElementById('dynamic-header');
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  headerDiv.style.backgroundImage = `url('${selectedImage}')`;
}

// Call the function when the page loads
window.onload = setRandomHeaderImage;