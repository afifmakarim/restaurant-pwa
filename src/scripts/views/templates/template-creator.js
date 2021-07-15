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
    <ul>
    ${resto.menus.foods
      .map((food) => `<li class="menu-item">${food.name}</li>`)
      .join(" ")}
      </ul>
      <h3>Drinks</h3>
      <ul>
    ${resto.menus.drinks
      .map((drink) => `<li class="menu-item">${drink.name}</li>`)
      .join(" ")}
      </ul>
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
    <div class="review-form-container">
    <h2>Make a Review</h2>
    <form class="review-form" id="review-form">
        <input type="hidden" name="id" value="${resto.id}">
        <div class="review-form-element">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" autocomplete="off">
        </div>
        <div class="review-form-element">
            <label for="review">Review</label>
            <textarea name="review" id="review"></textarea>
        </div>
        <button type="submit" id="button-review">Add Review</button>
    </form>
</div>
`;

const createRestoItemTemplate = (resto) => `
  </div>
  <div class="restau-item">
    <div class="restau-item__header">
    <picture>
    <source media="(max-width: 800px)" srcset="${
      resto.pictureId
        ? CONFIG.BASE_IMAGE_URL + resto.pictureId
        : "https://picsum.photos/id/666/800/450?grayscale"
    }">
        <img class="lazyload" class="restau-item__header__poster" alt="${
          resto.name
        }"
            data-src="${
              resto.pictureId
                ? CONFIG.BASE_IMAGE_URL + resto.pictureId
                : "https://picsum.photos/id/666/800/450?grayscale"
            }">
          </picture>
        <div class="restau-item__header__rating">
            <p>⭐️<span class="restau-item__header__rating__score">${
              resto.rating
            }</span></p>
        </div>
    </div>
    <div class="restau-item__content">
        <h3 class="resto_title"><a href="${`/#/detail/${resto.id}`}">${
  resto.name
}</a></h3>
        <p>${resto.description}</p>
        <h3 class="restau_item_cities">${resto.city}</h3>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
