import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div id="hero">
      <div id="hero-header">
        Begin Your Fine Dining Journey
      </div>
      <div id="hero-detail">
        Explore our multiple chain of restaurants across the city and enjoy a memorable dining experience
      </div>
    </div>
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
