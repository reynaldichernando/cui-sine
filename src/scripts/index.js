import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
// import swRegister from './sw-register';
// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';

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
//   swRegister();
//   WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
