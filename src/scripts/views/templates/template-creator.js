import CONFIG from '../../globals/config';

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

export {
  createRestaurantItemTemplate,
};
