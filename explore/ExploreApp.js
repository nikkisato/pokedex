import Header from '../common/Header.js';
import Component from '../Component.js';


class ExploreApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div> 
                 <main>

                 <div class="grid-container">
                 
                 </div>
            
                     
            </main>
     </div>
    `;
    }
}

export default ExploreApp;