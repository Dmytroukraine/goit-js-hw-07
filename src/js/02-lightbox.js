
import { galleryItems } from './gallery-items.js';
const galleryList = document.querySelector('.gallery');
const createGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${preview}">
          <img
            class="gallery__image"
            src="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup);

galleryList.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }

  const imageUrl = event.target.getAttribute('src');

  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`);

  instance.show();

  
}



console.log(galleryItems);
