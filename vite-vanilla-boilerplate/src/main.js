// FETCHING IMAGES
import "./style.css";

const container = document.getElementById("gallery");
// Overlay
const overlay = document.querySelector(".overlay");

let currentPage = 1;
const limit = 10;

// Create image element and add to container //
function createImage(src) {

  // Wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("image-card");

  // Image
  const image = document.createElement('img');
  image.src = src;
  image.style.width = "432px";
  image.style.marginBottom = "1rem";
  image.style.gap = "1rem";
  image.style.borderRadius = "16px";
  image.classList.add("gallery-image");

  // Add image + overlay to wrapper
  wrapper.appendChild(image);
  wrapper.appendChild(overlay);

  // Add wrapper to gallery container
  container.appendChild(image);
}

// Find images from API //
async function fetchImages(page) {
  try {
    const resp = await fetch(`https://image-feed-api.vercel.app/api/images?page=${page}`);
    const json = await resp.json();

    json.data.forEach(img => createImage(img.image_url));

  } catch (error) {
    console.error("Error to find images:", error);
  }
}

// Charge initial images //
fetchImages(currentPage);


// YURI SCRIPTS >>

// LOGO BUTTON FOR IMG LOADER
const button = document.getElementById('logoImgLoader-btn');
const textSection = document.querySelector('.welcomingCopy');
const buttonLoader = document.querySelector('#buttonContainer');

button.addEventListener("click", () => {
  const showingText = !textSection.classList.contains('hidden');

  if(showingText) {
    textSection.classList.add('hidden');
    container.style.display = "inline-flex";
    buttonLoader.style.display = "flex";
  } else {
    container.style.display = "none";
    textSection.classList.remove('hidden');
    buttonLoader.style.display = "none";    
  };
})


// BUTTON FOR DARK-LIGHT MODE

let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
  document.body.classList.add('darkMode');
  localStorage.setItem('darkMode', 'active');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkMode');
  localStorage.setItem('darkMode', null);
};

if(darkMode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode !== "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  };
})



// PATRICIA >>

// Button: charge more images //
buttonLoader.addEventListener("click", () => {
  currentPage++;
  fetchImages(currentPage);
});

// like button and counter//

let counting = 0;

const btnLike = document.getElementById("btnLike");
const moreLikes = document.getElementById("countLikes");

btnLike.addEventListener("click", 
    function() {
  counting++;
  moreLikes.textContent = counting;
});
