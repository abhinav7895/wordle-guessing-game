// Open How To Play Container 
const openWordle = () => {
    window.location.href = './src/html/wordle.html"';
};

const howToPlayContainer = document.querySelector('[data-play-container]');
const tilesToFlip = document.querySelectorAll('.tiles > .tile.flip');
const cutButton = document.querySelector('[data-cut-btn]');
const playButton = document.querySelector('[data-play-btn]');

const toggleHowToPlayContainer = (show) => {
    howToPlayContainer.style.top = show ? '50%' : '-200%';
};

// to flip the tiles of how to play container
const flipTiles = () => {
    tilesToFlip.forEach(tile => {
        tile.style.animation = 'flip 500ms linear';
    });
};

playButton.addEventListener('click', () => {
    toggleHowToPlayContainer(true);
});

cutButton.addEventListener('click', () => {
    toggleHowToPlayContainer(false);
});

howToPlayContainer.addEventListener('transitionend', flipTiles);
