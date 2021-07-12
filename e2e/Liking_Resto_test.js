/* eslint-disable no-undef */
const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("liking one restaurant", async ({ I }) => {
  const firstResto = locate(".resto_title a").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restau-item");
  const likedRestoTitle = await I.grabTextFrom(".resto_title");

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario("unliking one restaurant", async ({ I }) => {
  // menuju page home untuk melakukan like terlebih dahulu
  I.seeElement(".resto_title a");
  I.click(locate(".resto_title a").first());
  I.seeElement("#likeButton");
  I.click("#likeButton");

  // menuju page favorite
  I.amOnPage("/#/favorite");
  I.seeElement(".resto_title a");
  const firstLikedRestaurant = locate(".resto_title a").first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  // menuju page detail untuk melakukan unlike
  I.seeElement(".restau__title");
  const likedRestaurantTitle = await I.grabTextFrom(".restau__title");
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this resto"]');
  I.click('[aria-label="unlike this resto"]');

  // menuju page favorit untuk memastikan berhasil melakukan unlike
  I.amOnPage("/#/favorite");
});
