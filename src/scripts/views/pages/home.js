import RestaurantDbSource from "../../data/restaurant-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Resto List</h2>
      <div id="resto" class="resto">

      </div>
    </div>
  `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await RestaurantDbSource.listRestaurant();
    const restoContainer = document.querySelector("#resto");
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
