import Header from '../common/Header.js';
import Component from '../Component.js';
import SearchOptions from './SearchOptions.js';
import PokemonList from './PokemonList.js';
import { getPokemon } from '../services/Pokedex-api.js';
import Footer from '../common/Footer.js';
// import Paging from './Paging.js';


class ExploreApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.list-section');
        // const pokemonPaging = new Paging({ totalResults: 0 });
        // listSection.appendChild(pokemonPaging.renderDOM());

        const pokemonList = new PokemonList({ pokemon: [] });
        listSection.appendChild(pokemonList.renderDOM());


        async function loadPokemon() {
            const response = await getPokemon();
            const pokemonData = response.results;
            const totalResults = response.totalResults;
            pokemonList.update({ pokemon: pokemonData });
            // pokemonPaging.update({ totalResults: totalResults });
            console.log({ totalResults });
        }
        
        loadPokemon();
        
        const footer = new Footer();
        dom.appendChild(footer.renderDOM());

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }

    renderHTML() {
        return /*html*/`
            <div> 
              <!-- Header go here -->
                 <main>

                 <section class="options-section">
                 <!-- options go here -->
                   </section>
                 
                   <section class="list-section">
                 <div class="grid-container">
                 <!-- list goes here -->
                    </div>
                </section>
        
            </main>
     </div>
    `;
    }
}

export default ExploreApp;