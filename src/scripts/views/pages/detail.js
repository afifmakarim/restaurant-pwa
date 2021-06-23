import RestaurantDbSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import { createRestoDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <div id="restau" class="restau"></div>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector("#restau");
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
  },
};

export default Detail;
