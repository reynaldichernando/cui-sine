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
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },
  async afterRender() {
    // get movie list from API
  },
};

export default Home;
