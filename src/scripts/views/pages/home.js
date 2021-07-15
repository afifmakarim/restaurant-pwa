import RestaurantDbSource from "../../data/restaurant-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="jumbotron">
    <picture>
    <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
    <img class="lazyload" data-src="./images/hero-image_2-large.jpg" alt="hunger apps"></img>
    </picture>
    <div class="description">
      <h1>Hunger Apps</h1>
      <p>
        Discover the best food in town. Since 1996, restaurant has been
        serving up local authentic cuisine. you'll find the very best in high
        quality ingredients and dishes that are loaded with flavor!
      </p>
      <a class="btn-primary" href="#resto">Explore Us</a>
    </div>
  </div>
    <div id="resto" class="resto"></div>

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
