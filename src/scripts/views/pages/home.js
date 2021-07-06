import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Explore Restaurants</h2>
      <div id="loading">
        <div class="loader-wrapper">
          <div class="loader">Loading...</div>
        </div>
        <p class="loader-text">Pastikan koneksi internet kamu lancar. Silahkan muat ulang halaman ini apabila animasi loading tidak berhenti</p>
      </div>
      <div id="restaurant-list" class="restaurants">
      </div>
    </div>
    `;
  },
  async afterRender() {
    const loading = document.querySelector('#loading');
    loading.style.display = 'block';
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    loading.style.display = 'none';
  },
};

export default Home;
