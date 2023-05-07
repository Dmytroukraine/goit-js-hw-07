
// import { galleryItems } from './gallery-items.js';
// const galleryList = document.querySelector('.gallery');
// const createGalleryMarkup = galleryItems
//   .map(({ preview, original, description }) => {
//     return `
//       <li class="gallery__item">
//         <a class="gallery__link" href="${preview}">
//           <img
//             class="gallery__image"
//             src="${original}"
//             alt="${description}"
//           />
//         </a>
//       </li>
//     `;
//   })
//   .join('');

// galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup);

// galleryList.addEventListener('click', onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();

//   const isImage = event.target.classList.contains('gallery__image');
//   if (!isImage) {
//     return;
//   }

//   const imageUrl = event.target.getAttribute('src');

//   const instance = basicLightbox.create(`
//     <img src="${imageUrl}" width="800" height="600">
// `);

//   instance.show();

  
// }



// console.log(galleryItems);




// import { galleryItems } from "./gallery-items.js";


// const galleryList = document.querySelector('.gallery')


// const listItem = galleryItems
//   .map(
//     ({ preview, original, description }) => `
// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`
//   )
//   .join("");


// document.querySelector(".gallery").insertAdjacentHTML("beforeend", listItem);

// galleryList.addEventListener("click", onGalleryItemClick)

// function onGalleryItemClick(event) {
//   event.preventDefault();
//   if(event.target.nodeName !== 'IMG'){
//     return
//   }
 
//   const instance = basicLightbox.create(
//     <img src="${event.target.dataset.source}" alt="${event.target.alt}"

//     {onShow: (instance) => {window.addEventListener("keydown", closeByEsc)},

//   onClose: (instance) => {window.removeEventListener("keydown", closeByEsc)}
//   })
 
// instance.show()


// function closeByEsc({ code }) {
//   if (code === "Escape") {
//     instance.close();
//   }}}

// Віталіна Шпір, [07.05.2023 13:05]
// import { galleryItems } from './gallery-items.js';


// const listItem = galleryItems
//   .map(
//     ({ preview, original, description }) => `
//     <li class="gallery__item">
//     <a class="gallery__link" href="${original}">
//        <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>
//  </li>`
//   )
//   .join("");

//   document.querySelector(".gallery").insertAdjacentHTML("beforeend", listItem);

//   const lightbox = new SimpleLightbox(".gallery__link", {captionsData: 'alt', captionDelay: 250 });


import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const listItem = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `)
  .join('');

galleryList.insertAdjacentHTML('beforeend', listItem);

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = SimpleLightbox.open({
    content: `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />`,
    onClose: () => window.removeEventListener('keydown', closeByEsc),
  });

  window.addEventListener('keydown', closeByEsc);

  function closeByEsc({ code }) {
    if (code === 'Escape') {
      instance.close();
    }
  }
}
