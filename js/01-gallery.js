import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"></li>`
  )
  .join("");

galleryRef.innerHTML = markup;


console.log(galleryItems);
// srcset="${galleryItem.original}"