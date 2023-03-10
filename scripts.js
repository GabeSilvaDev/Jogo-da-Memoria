import { ImageService } from "./app/services/imageService.js";
import { Game } from "./app/game.js";

const listElement = document.querySelector('.card-list');
const resetButton = document.querySelector('#reset-button');
const logoList = [
    'angular',
    'react',
    'vue'
];

ImageService.loadImageAll([
    './img/treinaweb.svg',
    ...logoList.map(logo => `./img/${logo}.svg`)
]).then(() => {
    listElement.addEventListener('click', onCardClick);
    resetButton.addEventListener('click', () => Game.start(logoList));
    Game.start(logoList);
})

function onCardClick({target}) {
    const listItemElement = target.closest('.flipper-container');
    if(listItemElement){
        const index = [...listElement.children].indexOf(listItemElement);
        Game.selectedCard(index);
    }
}