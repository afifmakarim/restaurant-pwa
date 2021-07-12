import FavoriteRestodb from "../src/scripts/data/favorite-restodb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A Movie", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestodb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestodb.deleteResto(1);
  });

  it("should display unlike widget when the movie has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the movie has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked movie from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestodb.getAllResto()).toEqual([]);
  });

  it("should not throw error if the unliked movie is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestodb.deleteResto(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestodb.getAllResto()).toEqual([]);
  });
});
