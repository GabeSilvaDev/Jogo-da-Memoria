const listElement = document.querySelector('.card-list');
const resetButton = document.querySelector('#reset-button');

function createCardsTemplate(logoList) {
    return logoList.map(logo => (`
        <li class="flipper-container">
            <div class="flipper">
                <div class="flipper-face front">
                    <img src="img/treinaweb.svg" alt="Logo da Treinaweb" class="card-logo">
                </div>
                <div class="flipper-face back">
                    <img src="" alt="" class="card-logo">
                </div>
            </div>
        </li>
    `)).join('');
}

export const TemplateService = {
    setCardList(logoList){
        listElement.innerHTML = createCardsTemplate(logoList);
    },
    show(index, logo) {
        const flipperElement = listElement.querySelector(`li:nth-child(${index + 1}) .flipper`);
        flipperElement.querySelector('.back .card-logo').src = `./img/${logo}.svg`;
        flipperElement.querySelector('.back .card-logo').alt = `Logo da biblioteca ${logo}`;
        flipperElement.classList.add('show');
    },
    hide(index) {
        const flipperElement = listElement.querySelector(`li:nth-child(${index + 1}) .flipper`);
        flipperElement.classList.remove('show');
        flipperElement.querySelector('.back .card-logo').src = ``;
        flipperElement.querySelector('.back .card-logo').alt = ``;
    },
    showResetButton() {
        resetButton.classList.remove('hidden');
    },
    hideResetButton() {
        resetButton.classList.add('hidden');
    }
}