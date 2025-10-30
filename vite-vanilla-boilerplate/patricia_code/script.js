// like button and counter//

let counting = 0;

const btnLike = document.getElementById("btnLike");
const moreLikes = document.getElementById("contLikes");

btnLike.addEventListener("click", 
    function() {
  counting++;
  moreLikes.textContent = counting;
});

// function add comment//
function addComment() {

    //get the input user value 
    let inputComment = document.getElementById("inputComment")
    let tarefa = inputComment.value

    //create new item (li) and insert it into (ul list)
    let listComments = document.getElementById("listComments")
    let newComment = document.createElement("li")
    newComment.textContent = tarefa
    listComments.appendChild(newComment)

    //msg to user
    let mensage = "Thank you for your comment!"
    document.getElementById("mensage").textContent = mensage

    //clear user input
    inputComment.value = ""
}

// start fetch image from API //
/*
const container = document.getElementById('app');

function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  container.appendChild(image);
}

function init() {
fetch("https://image-feed-api.vercel.app/api/images/e8cd3ffd-794c-4ec6-b375-7788dbb14275")
.then(resp => resp.json())
.then(json => console.log(createImage(json.image_url)));

}

init();
*/

// finish fetch image from API //

const container = document.getElementById('imageContainer');
const loadMoreBtn = document.getElementById('loadMore');

let currentPage = 1;
const limit = 10;

// create image element and add to container //
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  image.style.width = "150px";
  image.style.margin = "5px";
  image.style.borderRadius = "8px";
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

// Button: charge more images //
loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchImages(currentPage);
});

// charge initial images //
fetchImages(currentPage);
