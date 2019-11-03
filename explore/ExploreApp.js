import Header from '../common/Header.js';
import Component from '../Component.js';
import SearchOptions from './SearchOptions.js';
import PokemonList from './PokemonList.js';
import { getPokemon } from '../services/Pokedex-api.js';
import Footer from '../common/Footer.js';


class ExploreApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const pokemonList = new PokemonList({ pokemon: [] });
        const domPokemonList = pokemonList.renderDOM();
        dom.appendChild(domPokemonList);

        const response = await getPokemon();
        const pokemon = response.results;

        pokemonList.update({ pokemon: pokemon });

        const footer = new Footer();
        dom.appendChild(footer.renderDOM());


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
                 <!-- list goes here -->


         

                    </div>
        
            </main>
     </div>
    `;
    }
}

export default ExploreApp;