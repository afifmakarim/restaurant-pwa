import RestaurantDbSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import {
  createRestoDetailTemplate,
  createLikeButtonTemplate,
} from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
      <div id="restau" class="restau"></div>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector("#restau");
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    const likeButtonContainer = document.querySelector("#likeButtonContainer");
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city,
      },
    });
  },
};

export default Detail;
