import Component from '../Component.js';

class SearchOptions extends Component {


    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('s') || '';
        }
      
        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('pokemon', formData.get('search'));
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/`
        <form class="sort-search">
        <div class="navigation">
        <div class="search-for">
                     <p class="search-text-for">Search For:</p> 
                     <input id="search" class="search-for-input" name="search">
             </div>
            <br>

        <div class="filter-by">
        <p class="search-text-filter">Filter By:</p> 
        <fieldset class="type">
        <label class="radio" >
                  <input type="radio" name="type" value="type" >
                  Type
                    </label>
                    <br>
                    <label>
                        <input type="radio" name="type" value="attack" >
                         Attack
                    </label>
                        <br>
                    <label>
                        <input type="radio" name="type" value="defense" >
                        Defense
                    </label>
        </fieldset>
            <input id="search-filter" class="search-filter" name="search">
        </div>
            <button class="submit">Submit</button>
        </div>
        </form>

        `;
    }
}

export default SearchOptions;