import CONFIG from "../../globals/config";

const createRestoDetailTemplate = (resto) => `
  <h2 class="restau__title">${resto.name}</h2>
  <img class="restau__poster" src="${
    CONFIG.BASE_IMAGE_URL + resto.pictureId
  }" alt="${resto.name}" />
  <div class="restau__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
    <h4>Category</h4>
    <p>${resto.categories.map((category) => `${category.name}`).join(", ")}</p>
  </div>
  <div class="restau__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
    <h3>Foods</h3>
    ${resto.menus.foods
      .map((food) => `<li class="menu-item">${food.name}</li>`)
      .join(" ")}
      <h3>Drinks</h3>
    ${resto.menus.foods
      .map((drink) => `<li class="menu-item">${drink.name}</li>`)
      .join(" ")}
  </div>
  <div class="restau__reviews">
  <h1>Customer Review</h1>
  <div class="review-container">
  ${resto.customerReviews
    .map(
      (review) => `
          <div class="review-body">
              <h3 class="review-consumer-name">${review.name}</h3>
              <small class="review-date-post">${review.date}</small>
              <p class="review-content">${review.review}</p>
          </div>
      `
    )
    .join("")}
    </div>
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
