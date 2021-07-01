const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },
  async afterRender() {
    // get movie list from idb
  },
};

export default Favorite;
