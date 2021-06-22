import RestaurantDbSource from "../../data/restaurant-source";

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies">
  
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await RestaurantDbSource.reviewRestaurant();
    console.log(restaurant);
  },
};

export default Favorite;
