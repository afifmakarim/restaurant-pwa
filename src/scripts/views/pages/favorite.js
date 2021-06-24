import FavoriteRestodb from "../../data/favorite-restodb";
import { createRestoItemTemplate } from "../templates/template-creator";

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Resto</h2>
        <div id="resto" class="resto">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestodb.getAllResto();
    const restoContainer = document.querySelector("#resto");
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
