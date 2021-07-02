import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Explore Restaurants</h2>
      <div class="loader">Loading...</div>
      <div id="restaurant-list" class="restaurants">
      </div>
    </div>
    `;
  },
  async afterRender() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    loader.style.display = 'none';
  },
};

export default Home;
