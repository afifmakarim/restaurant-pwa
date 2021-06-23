import API_ENDPOINT from "../globals/api-endpoint";
import CONFIG from "../globals/config";

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async reviewRestaurant() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.review, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": CONFIG.KEY,
      },
      body: data,
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;
