import ExploreApp from './ExploreApp.js';

const app = new ExploreApp();
const dom = app.renderDOM();
document.body.prepend(dom);