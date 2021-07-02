import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  buttonOpen: document.querySelector('#hamburger'),
  buttonClose: document.querySelector('#multiplication'),
  drawer: document.querySelector('#navigationDrawer'),
  overlay: document.querySelector('#overlay'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
