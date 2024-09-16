const settingsButton = document.querySelector('.settings');
const minutesInput = document.querySelector('.minutes input');
const secondsInput = document.querySelector('.seconds input');
const image = document.querySelector('.settings img');
const timerStart = document.querySelector('.start');
let countdown;
let currentImageSrc = image.getAttribute('src');

const toggleInputDisabled = () => {
    const gearSvg = 'images/gear.svg';
    const checkSvg = 'images/check.svg';

    [minutesInput, secondsInput].forEach(input => {
        input.disabled = !input.disabled;
        clearInterval(countdown);
    });
    timerStart.textContent = 'Start';
    image.setAttribute('src', currentImageSrc === gearSvg ? checkSvg : gearSvg);
    currentImageSrc = image.getAttribute('src');
}
settingsButton.addEventListener('click', toggleInputDisabled);

const toggleTimer = () => {
    if(timerStart.textContent === 'Start') {
        if (currentImageSrc = 'images/check.svg') {
            toggleInputDisabled();
        }
        timerStart.textContent = 'Stop';
        countdown = setInterval(() => {
            if(secondsInput.value > 0) {
                secondsInput.value = (secondsInput.value - 1).toString().padStart(2, '0');
            } else {
                if(minutesInput.value > 0) {
                    minutesInput.value = (minutesInput.value - 1).toString().padStart(2, '0');
                    secondsInput.value = 59;
                } else {
                    clearInterval(countdown);
                    alert('Time is up!');
                }
            }
        }, 1000);
    } else {
        timerStart.textContent = 'Start';
        clearInterval(countdown);
    }
}

timerStart.addEventListener('click', toggleTimer);