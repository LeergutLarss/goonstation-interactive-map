
const images = ['https://leergutlarss.github.io/goonstation-interactive-map/Atlas/images/atlas-1.png', 'https://leergutlarss.github.io/goonstation-interactive-map/Cogmap1/images/cogmap-1.png', 'https://leergutlarss.github.io/goonstation-interactive-map/Cogmap2/images/cogmap2-1.png'];

function createNodes(imageSource) {

    imageSource.forEach(source => {
        const mapContainer = document.createElement('a');
        const mapImage = document.createElement('img');
        const mapName = document.createElement('p2');

        mapContainer.classList.add('mapNode');
        mapContainer.href = source.slice(0, source.indexOf('/i')) + '/index.html';

        mapImage.src = source;
        mapContainer.appendChild(mapImage);

        mapName.textContent = source.slice(source.indexOf('p/') + 2, source.indexOf('/i')); 
        mapContainer.appendChild(mapName);

        document.getElementById('main').appendChild(mapContainer);
    });
}

createNodes(images);