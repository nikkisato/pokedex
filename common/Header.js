import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <div class="header">
                <img class="ball" src="assets/ball.png">
                <h1> Pokedex</h1>

                <div class="dropdown" id="dropdown">
                <button class="dropbtn">Menu</button>
                     <div class="dropdown-content">
                    <a href="./">Home</a>
                    <a href="./pokedex.html">Pokedex</a>
                </div>
            </div>
            </div>
        </header>
        `;
    }
}

export default Header;