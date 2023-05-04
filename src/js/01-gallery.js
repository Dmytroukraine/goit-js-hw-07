
import { galleryItems } from './src/gallery-items.js';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

const galleryContainer = document.querySelector('.gallery');

const createGalleryMarkup = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </div>
    `;
    })
    .join('');
};

galleryContainer.innerHTML = createGalleryMarkup();

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalSrc = event.target.closest('.gallery__link').href;

  const instance = basicLightbox.create(`
    <img src="${originalSrc}" width="800" height="600">
`);

  instance.show();
});

console.log(galleryItems);
