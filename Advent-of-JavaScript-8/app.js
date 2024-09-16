const daysOfWeekMap = {
    0: 'SUN', 
    1: 'MON', 
    2: 'TUES', 
    3: 'WED', 
    4: 'THUR', 
    5: 'FRI', 
    6: 'SAT'
}

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166},
    sunny: { width: 208, height: 213},
    stormy: { width: 246, height: 187},
    snowy: { width: 230, height: 196},
    'partly-cloudy': {width: 230, height:209},
    rainy: { width: 160, height: 222},
}

function createWeatherDiv(weatherType, temperature, precipitation, lowTemperature) {
    const iconSize = iconNameToSizeMap[weatherType];
    if (!iconSize) {
        console.error(`No size found for weather type "${weatherType}"`);
        return;
    }

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="weather">
            <svg role="img" width="${iconSize.width}" height="${iconSize.height}" viewBox="0 0 ${iconSize.width} ${iconSize.height}">
                <use xlink:href="#${weatherType}"></use>
            </svg>
        </div>
        <div class="temperature">
            ${temperature}<span class="degrees">&deg;</span>
        </div>
        <div class="content">
            <div class="precipitation">
                <svg role="img" class="icon">
                    <use xlink:href="#precipitation"></use>
                </svg>
                ${precipitation}%
            </div>
            <div class="low">
                <svg role="img" class="icon">
                    <use xlink:href="#low"></use>
                </svg>
                ${lowTemperature}&deg;
            </div>
        </div>
    `;

    const elements = document.querySelectorAll(`.${weatherType}`);
    if (elements.length) {
        elements.forEach(element => element.appendChild(div.cloneNode(true)));
    } else {
        console.error(`Element with class "${weatherType}" not found`);
    }
}

createWeatherDiv('rainy', 60, 90, 50);
createWeatherDiv('partly-cloudy', 55, 27, 57);
createWeatherDiv('sunny', 67, 23, 54);
createWeatherDiv('snowy', 52, 13, 51);
createWeatherDiv('stormy', 65, 15, 40);
createWeatherDiv('cloudy', 70, 20, 55);