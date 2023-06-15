const btn = document.getElementById("btn");

const animeimg = document.querySelector(".anime-img");

const animecontainer = document.querySelector(".img-container");

const animename = document.querySelector(".animename");

btn.addEventListener("click", () => {
  window
    .fetch("https://api.catboys.com/img")
    .then((x) => x.json())
    .then((y) => {
      animeimg.src = y.url;
      animename.innerText = y.artist;
      animecontainer.style.display = "block";
    })
    .catch(() => {
      animename.innerText = "Image not found";
    });
});
