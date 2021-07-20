import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createLoadingTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Explore Restaurants</h2>
      <div id="loading"></div>
      <div id="restaurant-list" class="restaurants">
      </div>
    </div>
    `;
  },
  async afterRender() {
    const loading = document.querySelector('#loading');
    loading.innerHTML = createLoadingTemplate();
    loading.style.display = 'block';

    const loaderText = document.querySelector('.loader-text');
    setTimeout(() => {
      loaderText.style.display = 'block';
    }, 3000);

    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    loading.style.display = 'none';
  },
};

export default Home;
