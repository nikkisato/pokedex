import Component from '../Component.js';

class SearchOptions extends Component {


    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        const typeMenu = form.querySelector('input [name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('s') || '';

            const type = searchParams.get('type');
            if (type) {
                typeMenu.forEach(typeMenu => {
                    typeMenu.checked = typeMenu.value === type;
                });
            }

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

            searchParams.set('type', formData.get('type'));
            searchParams.set('s', formData.get('search'));
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/`
        <form class="sort-search">
        <div class="navigation">
                     <p class="search-text">Search For:</p> 
                     <input class="search" name="search">
        
            <select class="options">
            <p class="search-text">Filter By:</p> 
                <option value="">Search Attributes</option>
                <option value="type">Type</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
            </select>

            <button class="submit">Submit</button>

        </div>
        </form>

        `;
    }
}

export default SearchOptions;