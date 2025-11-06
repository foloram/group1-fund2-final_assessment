// FETCHING IMAGES
import "./style.css";

const container = document.getElementById("gallery");

let currentPage = 1;
const limit = 10;

// ghazal pop-up
const popupOverlay = document.getElementById("popupOverlay");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("close-popup");

// Function to open popup with the clicked image
function openPopup(src) {
  popupImage.src = src;
  popupOverlay.classList.remove("hidden");
}
// Function to close popup
closePopup.addEventListener("click", () => {
  popupOverlay.classList.add("hidden");
});

// Create image element and add to container //
function createImage(src) {
  // Wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("image-card");

  // Image
  const image = document.createElement("img");
  image.src = src;
  image.style.width = "200px";
  image.style.marginBottom = "1rem";
  image.style.gap = "1rem";
  image.style.borderRadius = "16px";
  image.style.cursor = "pointer"; // Show it's clickable
  image.classList.add("gallery-image");

  // THIS IS IMPORTANT: Add click event to open popup!
  image.addEventListener("click", () => {
    openPopup(src);
  });

  // Add image + overlay to wrapper
  wrapper.appendChild(image);
  wrapper.appendChild(overlay);

  // Append the wrapper (not just the image) to the gallery
  container.appendChild(wrapper);
}

// Fetch images from API
async function fetchImages(page) {
  try {
    const resp = await fetch(
      `https://image-feed-api.vercel.app/api/images?page=${page}`
    );
    const json = await resp.json();

    json.data.forEach((img) => createImage(img.image_url));
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

// Load initial images
fetchImages(currentPage);

// YURI SCRIPTS >>

// LOGO BUTTON FOR IMG LOADER
const button = document.getElementById("logoImgLoader-btn");
const textSection = document.querySelector(".welcomingCopy");
const buttonLoader = document.querySelector("#buttonContainer");

button.addEventListener("click", () => {
  const showingText = !textSection.classList.contains("hidden");

  if (showingText) {
    textSection.classList.add("hidden");
    container.style.display = "inline-flex";
    buttonLoader.style.display = "flex";
  } else {
    container.style.display = "none";
    textSection.classList.remove("hidden");
    buttonLoader.style.display = "none";
  }
});

// BUTTON FOR DARK-LIGHT MODE

let darkMode = localStorage.getItem("darkMode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// PATRICIA >>

// Button: charge more images 
buttonLoader.addEventListener("click", () => {
  currentPage++;
  fetchImages(currentPage);
});

// like button and counter
let counting = 0;

const btnLike = document.getElementById("btnLike");
const moreLikes = document.getElementById("countLikes");

btnLike.addEventListener("click", function () {
  counting++;
  moreLikes.textContent = counting;
});



