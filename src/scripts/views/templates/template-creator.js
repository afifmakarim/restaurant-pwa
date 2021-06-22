import CONFIG from "../../globals/config";

const createRestoDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.title}</h2>
  <img class="movie__poster" src="${
    CONFIG.BASE_IMAGE_URL + resto.poster_path
  }" alt="${resto.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${resto.tagline}</p>
    <h4>Release Date</h4>
    <p>${resto.release_date}</p>
    <h4>Duration</h4>
    <p>${resto.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${resto.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${resto.overview}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="restau-item">
    <div class="restau-item__header">
        <img class="restau-item__header__poster" alt="${resto.name}"
            src="${
              resto.pictureId
                ? CONFIG.BASE_IMAGE_URL + resto.pictureId
                : "https://picsum.photos/id/666/800/450?grayscale"
            }">
        <div class="restau-item__header__rating">
            <p>⭐️<span class="restau-item__header__rating__score">${
              resto.rating
            }</span></p>
        </div>
    </div>
    <div class="restau-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

export { createRestoItemTemplate, createRestoDetailTemplate };
