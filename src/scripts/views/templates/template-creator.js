import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <div class="restaurant-info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>
    ${restaurant.categories.map((category) => `${category.name}`).join(', ')}
    </p>
  </div>
  <div class="restaurant-description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="menu">
    <h3>Menu</h3>
    <div class="menu-detail">
      <table>
        <thead>
          <tr>
            <th>Drinks</th>
          </tr>
        </thead>
        <tbody>
        ${restaurant.menus.drinks.map((drink) => `
        <tr>
        <td class="menu-item">
          <div>
            <h5>${drink.name}<h5>
            <small>Quisque rutrum. Aenean imperdiet.</small>
          </div>
          <div>$ ${(Math.random() * 99).toFixed(2)}</div>
        </td>
        </tr>
        `).join('')}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Foods</th>
          </tr>
        </thead>
        <tbody>
        ${restaurant.menus.foods.map((food) => `
        <tr>
        <td class="menu-item">
          <div>
            <h5>${food.name}<h5>
            <small>Quisque rutrum. Aenean imperdiet.</small>
          </div>
          <div>$ ${(Math.random() * 99).toFixed(2)}</div>
        </td>
        </tr>
        `).join('')}
        </tbody>
      </table>
    </div>
  </div>
  <div class="review-list">
    <h3>Reviews</h3>
    ${restaurant.customerReviews.map((review) => `
    <div class="review-item">
      <p><em>"${review.review}"</em></p>
      <p>- ${review.name} (${review.date})</p>
    </div>
    `).join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="picture" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" width="300px">
    <div class="city">${restaurant.city}</div>
    <div class="card-header">
        <h3 class="title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <div class="rating-item">
            Rating: <span class="rating">${restaurant.rating}</span>
        </div>
    </div>
    <div class="card-body">
        <p class="description">${restaurant.description.substr(0, 150).trim()}...</p>
    </div>
</div>
`;

const createLoadingTemplate = () => `
  <div class="loader-wrapper">
    <div class="loader">Loading...</div>
  </div>
  <p class="loader-text">Pastikan koneksi internet kamu lancar. Silahkan muat ulang halaman ini apabila animasi loading tidak berhenti</p>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="un-favorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLoadingTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
