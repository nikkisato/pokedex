import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const data = this.props.data;

        return /*html*/`
    <div class="contain">
            <div class="image-container">
                    <img class="image" ${data.url_image}>
             </div>
        <div class="info">
                <h2>${data.pokemon}</h2>
                <p class="id-series">${data.species_id}</p>
                <p class="defense">${data.defense}</p>
                <p class="attack">${data.attack}</p>
                <p class="type1" id='${data.color_1}'>${data.type_1}</p>
                <p class="type2" id='${data.color_1}'>${data.type_2}</p>
        </div>
    </div>
      `;
    }
}

export default ImageItem;