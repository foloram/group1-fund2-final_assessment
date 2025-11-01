// FETCHING IMAGES
import "./style.css";

const container = document.getElementById("gallery");

let currentPage = 1;
const limit = 10;

// Create image element and add to container //
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  image.style.width = "432px";
  image.style.marginBottom = "1rem";
  image.style.gap = "1rem";
  image.style.borderRadius = "16px";
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

button.addEventListener("click", () => {
  const showingText = !textSection.classList.contains('hidden');

  if(showingText) {
    textSection.classList.add('hidden');
    container.style.display = "inline-flex";
  } else {
    container.style.display = "inline-flex";
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
