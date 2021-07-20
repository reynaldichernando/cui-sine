const assert = require('assert');

Feature('Liking Restaurant');

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item .title a');

  const firstRestaurant = locate('.restaurant-item .title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item .title a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  
  I.seeElement('.restaurant-item .title a');
  
  const firstRestaurant = locate('.restaurant-item .title a').first();
  I.click(firstRestaurant);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  
  I.seeElement('.restaurant-item .title a');
  const likedRestaurant = locate('.restaurant-item .title a').first();
  I.click(likedRestaurant);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
  