/* eslint-disable no-underscore-dangle */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    buttonOpen, buttonClose, drawer, overlay, content,
  }) {
    this._buttonOpen = buttonOpen;
    this._buttonClose = buttonClose;
    this._drawer = drawer;
    this._overlay = overlay;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      buttonOpen: this._buttonOpen,
      buttonClose: this._buttonClose,
      drawer: this._drawer,
      overlay: this._overlay,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
