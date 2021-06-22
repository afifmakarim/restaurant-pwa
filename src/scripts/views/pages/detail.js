import RestaurantDbSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default Detail;
