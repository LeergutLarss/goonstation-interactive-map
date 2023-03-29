
const images = ['../Atlas/images/atlas-1.png', '../Cogmap1/images/cogmap-1.png', '../Cogmap2/images/cogmap2-1.png'];

function createNodes(imageSource) {

    imageSource.forEach(source => {
        const mapNode = document.createElement('div');
        const mapImage = document.createElement('img');
    
        mapNode.classList.add('mapNode');
        mapImage.src = source;
        mapNode.appendChild(mapImage);
        document.getElementById('main').appendChild(mapNode);
    });
}

createNodes(images);