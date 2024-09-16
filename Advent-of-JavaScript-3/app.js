const sounds = [];
for (let i = 1; i <= 23; i++) {
    sounds.push(new Audio(`audio/key-${i}.mp3`));
}

const whiteKeys = document.querySelectorAll('.white-keys');
const blackKeys = document.querySelectorAll('.black-keys');

whiteKeys.forEach((element, index) => {
    element.addEventListener('click', () => {
        sounds[index].play();
    });
});

blackKeys.forEach((element, index) => {
    element.addEventListener('click', () => {
        sounds[index + whiteKeys.length].play();
    });
});