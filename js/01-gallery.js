import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const renderGallery = (imgs) =>
  imgs.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`,
    ""
  );

const insertRenderGallery = (string) => {
  galleryRef.insertAdjacentHTML("beforeend", string);
};

insertRenderGallery(renderGallery(galleryItems));

console.log(galleryItems);

galleryRef.onclick = (e) => {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    basicLightbox
      .create(
        `<img width="1400" height="900" src="${e.target.dataset.source}">`
      )
      .show();
    document.addEventListener("keydown", closeModalOnEscape);
  } else {
    return;
  }
};
document.removeEventListener("keydown", closeModalOnEscape);
function closeModalOnEscape(event) {
  if (event.target.nodeName === "A") {
    console.log("close");
    // basicLightbox.close();
}
  }

