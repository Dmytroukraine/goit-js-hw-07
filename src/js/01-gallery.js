

import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const createGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
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

  const imageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
  <img src="${imageUrl}" width="800" height="600">
`);


  instance.show();

  document.addEventListener('keydown', onKeyPress);

  function onKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onKeyPress);
    }
  }
}



console.log(galleryItems);
