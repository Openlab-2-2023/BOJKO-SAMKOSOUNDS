const topHover = document.getElementById("top-fill");
const bottomHover = document.getElementById("bottom-fill");
const card = document.getElementById("card");
const photo = document.getElementById("photo");



topHover.addEventListener("mouseenter", () => {
  bottomHover.classList.add("fill-blue");
  card.classList.add("fill-blue");
  topHover.classList.add("fill-gray-darker");
  photo.classList.add("photo-fill-lighter");

});

topHover.addEventListener("mouseleave", () => {
  bottomHover.classList.remove("fill-blue");
  card.classList.remove("fill-blue");
  topHover.classList.remove("fill-gray-darker");
  photo.classList.remove("photo-fill-lighter");


});

bottomHover.addEventListener("mouseenter", () => {
  topHover.classList.add("fill-blue-lighter");
  bottomHover.classList.add("fill-gray-darker");
  card.classList.add("fill-gray-darker");
  photo.classList.add("photo-fill-darker");


});

bottomHover.addEventListener("mouseleave", () => {
  topHover.classList.remove("fill-blue-lighter");
  bottomHover.classList.remove("fill-gray-darker");
  card.classList.remove("fill-gray-darker");
  photo.classList.remove("photo-fill-darker");


})

