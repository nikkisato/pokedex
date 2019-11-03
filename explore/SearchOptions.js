import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
      
        <div class="navigation">

        <form class="sort-search">
                     <p class="search-text">Search For:</p> 
                     <input class="search" name="search">
            </form>

            <select class="options">
                <option value="">Search Attributes</option>
                <option value="type">Type</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
            </select>
    
    
        </div>


        `;
    }
}

export default SearchOptions;