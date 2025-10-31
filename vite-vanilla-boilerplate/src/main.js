import "./style.css";

const container = document.getElementById("content");

function createImage(src) {
  const image = document.createElement("img");
  image.src = src;
  container.appendChild(image);
}

function init() {
  fetch(
    "https://image-feed-api.vercel.app/api/images/e8cd3ffd-794c-4ec6-b375-7788dbb14275"
  )
    .then((resp) => resp.json())
    .then((json) => createImage(json.image_url));
}

init();


// MY SCRIPTS


// CHECKBOX FOR DARK-LIGHT MODE
/*const switchBtn = getElementById('switch');
const mode = document.querySelector('.mode')

switchBtn.addEventListener('change', () => {

  if(switchBtn.checked) {
    document.body.classList.add('dark');
    mode.innerHTML='DARK'
  } else {
      document.body.classList.remove('dark');
      mode.innerHTML='LIGHT'
  }
})*/



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

// if(darkMode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode !== "active ") {
    enableDarkMode();
  } else {
    disableDarkMode();
  };
})