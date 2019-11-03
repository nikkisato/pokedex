import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/`
            <p id="arrow-positions" class="paging">
                <button class="arrows" disabled>◀</button>
                <span class="page-num">Page 1 of 5</span>
                <button class="arrows">▶</button>
            </p>



            // <div id="arrow-position">
            // <img class="arrows" src="assets/restart.png">
            // <span class="page-num">Page 1</span>
            // <img class="arrows" src="assets/play-button.png">
            // </div>
        `;
    }
}

export default Paging;












