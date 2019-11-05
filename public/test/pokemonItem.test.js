import PokemonItem from '../explore/PokemonItem.js';
const test = QUnit.test;

QUnit.module('Render Pokemon Item');

test('renders html from data', assert => {
    // arrange
    const Pokemon = {
        pokemon: 'charizard',
        species_id: '6',
        // type_1: 'fire',
        // type_2: 'flying',
        attack: '84',
        defense: '78',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        // color_1: '#F08030',
        // color_2: '#A890F0',
    };

    const expected = /*html*/`
    <div class="contain" style="background-color:#F08030">
    <div class="image-container">
            <img class="image" src= 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'style="background-color:#F08030" alt="charizard">
     </div>
<div class="info">
        <h2>charizard</h2>
        <p class="id-series">#6</p>
        <p class="defense">Defense:84</p>
        <p class="attack">Attack:78</p>
        <br>
        <p class="type" style="background-color:#F08030">fire</p>
        <p class="type" style="background-color:#A890F0">flying</p>
</div>
</div>
    `;

    // act
    const props = { Pokemon: Pokemon };
    const PokemonItems = new PokemonItem(props);
    const html = PokemonItems.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});