import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const renderGallery = (imgs) =>
  imgs.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`,
    ""
  );

const insertRenderGallery = (string) => {
  galleryRef.insertAdjacentHTML("beforeend", string);
};

insertRenderGallery(renderGallery(galleryItems));

console.log(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
gallery.on("show.simplelightbox", function () {});
