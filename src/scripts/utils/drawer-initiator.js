/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    buttonOpen, buttonClose, drawer, overlay,
  }) {
    buttonOpen.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, overlay);
    });

    buttonClose.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, overlay);
    });

    overlay.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, overlay);
    });
  },
  _toggleDrawer(event, drawer, overlay) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  },
  _closeDrawer(event, drawer, overlay) {
    event.stopPropagation();
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  },
};

export default DrawerInitiator;
