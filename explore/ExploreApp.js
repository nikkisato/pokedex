import Header from '../common/Header.js';
import Component from '../Component.js';
import SearchOptions from './SearchOptions.js';


class ExploreApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());


        
    }

    renderHTML() {
        return /*html*/`
            <div> 
              <!-- Header go here -->
                 <main>

                 <section class="options-section">
                 <!-- options go here -->
                   </section>
                 
                 <div class="grid-container">
                 <!-- paging goes here -->


                 <!-- quote list goes here -->        

                    </div>
        
            </main>
     </div>
    `;
    }
}

export default ExploreApp;