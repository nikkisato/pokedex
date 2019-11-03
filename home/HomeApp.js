import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div> 
                 <main>
                 <div class="center">
                     <h2>This is the Home page </h2>
                     <br>
                     <a class ="button" href="./pokedex.html"> Click here to go to pokedex</a>
            </main>
     </div>
    `;
    }
}

export default HomeApp;

const app = new HomeApp();
const dom = app.renderDOM();
document.body.prepend(dom);