import FavoriteRestodb from "../src/scripts/data/favorite-restodb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Resto", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeFalsy();
  });

  it("should be able to like the resto", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavoriteRestodb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestodb.deleteResto(1);
  });

  it("should not add a resto again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // Tambahkan restoran dengan ID 1 ke daftar restoran yang disukai
    await FavoriteRestodb.putResto({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restoran
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    // tidak ada restoran yang ganda
    expect(await FavoriteRestodb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestodb.deleteResto(1);
  });

  // menggunakan metode xit, bukan it
  it("should not add a resto when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestodb.getAllResto()).toEqual([]);
  });
});
