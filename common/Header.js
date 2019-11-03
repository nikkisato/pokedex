import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
            <div class="overall-header">

            <div class="title">
            <img class="ball" src="assets/ball.png">
            <h1> Pokedex</h1>
                </div>
                <div class="menu">
                     <a class="button" href="./index.html">Home</a>
                    <a class="button" href="./pokedex.html">Pokedex</a>
                     </div> 
            </div>
                    
               
        </header>
        `;
    }
}

export default Header;