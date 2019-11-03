import Header from '../common/Header.js';
import Component from '../Component.js';
import SearchOptions from './SearchOptions.js';
// import Paging from './Paging.js';
import PokemonList from './PokemonList.js';
import  { getPokemon } from '../services/Pokedex-api.js';


class ExploreApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        // const gridSection = dom.querySelector('.grid-container');
        // const paging = new Paging();
        // gridSection.appendChild(paging.renderDOM());
        // gridSection.appendChild(optionsSection);

        const pokemonList = new PokemonList({ data: [] });
        const domPokemonList = pokemonList.renderDOM();
        dom.appendChild(domPokemonList);

        const response = await getPokemon();
        const data = response.results;

        pokemonList.update({ data: data});




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