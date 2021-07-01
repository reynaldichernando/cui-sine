const Detail = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant Detail</h2>
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // get movie list from idb
  },
};

export default Detail;
