import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
    <div class="contain" style="background-color:${pokemon.color_1}">
            <div class="image-container">
                    <img class="image" src="${pokemon.url_image}" style="background-color:'${pokemon.color_1}'" alt="${pokemon.pokemon}">
             </div>
        <div class="info">
                <h2>${pokemon.pokemon}</h2>
                <p class="id-series">#${pokemon.species_id}</p>
                <p class="defense">Defense: ${pokemon.defense}</p>
                <p class="attack">Attack: ${pokemon.attack}</p>
                <br>
                <p class="type" style="background-color:${pokemon.color_1}"> ${pokemon.type_1}</p>
                <p class="type" style="background-color:${pokemon.color_2}">${pokemon.type_2}</p>
        </div>
    </div>
      `;
    }
}

export default PokemonItem;