import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    renderHTML() {
        return /*html*/`
        <div class="grid-container">
        
        
        </div>
     `;
    }
    onRender(dom) {
        const Data = this.props.data;

        Data.forEach(data => {
            const props = { data: data };
            const pokedexItem = new PokemonItem(props);
            const pokedexItemDOM = pokedexItem.renderDOM();
            dom.appendChild(pokedexItemDOM);
        });
    }
}

export default PokemonList;
