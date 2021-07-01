import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Explore Restaurants</h2>
      <div id="restaurant-list" class="restaurants">
      </div>
    </div>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
