
const images = ['../Atlas/images/atlas-1.png', '../Cogmap1/images/cogmap-1.png', '../Cogmap2/images/cogmap2-1.png'];

function createNodes(imageSource) {

    imageSource.forEach(source => {
        const mapContainer = document.createElement('a');
        const mapImage = document.createElement('img');
        const mapName = document.createElement('p2');

        mapContainer.classList.add('mapNode');
        mapContainer.href = source.slice(0, source.indexOf('/i')) + '/index.html';
        mapImage.src = source;
        mapContainer.appendChild(mapImage);

        mapName.textContent = source.slice(3, source.indexOf('/i')); 
        mapContainer.appendChild(mapName);

        document.getElementById('main').appendChild(mapContainer);
    });
}

createNodes(images);