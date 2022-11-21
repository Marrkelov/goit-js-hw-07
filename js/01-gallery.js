import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryCreation = document.querySelector(".gallery");

const instance = basicLightbox.create(`
<div class="modal">
<img>
</img>`);

function addElements(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
    })
    .join("");
}

galleryCreation.insertAdjacentHTML("beforeend", addElements(galleryItems));

const openModal = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const originalImgUrl = e.target.dataset.source;
  instance.element().queruSelector("img").src = originalImgUrl;
  instance.show();
  window.addEventListener("keydown", onEscCloseModal);
};

galleryCreation.addEventListener("click", openModal);
