'use strict';

import {getResult} from '../js/response.js';
import {startScreen, endScreen} from '../js/screens.js';
import {createRandomWord} from '../js/words.js'

const checkButton = document.querySelector('.submit-draw-button');
const progressCounter = document.querySelector('.progress-bar-counter p');
const bestVariantScore = document.querySelector('.best-variant-count p');
const progressBar = document.querySelector('.progress-bar-slider');
const bestVariantShow = document.querySelector('.best-variant');
const checkResultShow = document.querySelector('.draw-check-result-wrapper');
const checkResultScore = document.querySelector('.draw-check-result p');


let bestScore = 0;
let bestVariant;
let onChecking = false;
let guessWord = createRandomWord();
console.log(guessWord);
const bias = 40;
const colorScheme = {
    80: 'linear-gradient(to right, #e5405e 0%, #ff8c00 20%, #ffdb3a 40%, #ffff00 60%, #adff2f 80%, #3fffa2 100%)',
    60: 'linear-gradient(to right, #e5405e 0%, #ff8c00 25%, #ffdb3a 50%, #ffff00 75%, #adff2f 100%)',
    40: 'linear-gradient(to right, #e5405e 0%, #ff8c00 33%, #ffdb3a 66%, #ffff00 100%);',
    20: 'linear-gradient(to right, #e5405e 0%, #ff8c00 50%, #ffdb3a 100%)',
    0: 'linear-gradient(to right, #e5405e 0%, #ff8c00 100%)'
}


function updateCounters() {
    progressCounter.innerHTML = bestScore + '%';
    bestVariantScore.innerHTML = bestScore + '%';
}

function updateBestShow(img) {
    bestVariant = 'url(' + img + ')'
    bestVariantShow.style.background = bestVariant;
    bestVariantShow.style.backgroundPosition = 'center';
    bestVariantShow.style.backgroundSize = 'cover';
}

function showResult(result, done) {
    if (done) {
        checkResultScore.innerHTML = 'Результат: ' + result + '%';
    } else {
        checkResultScore.innerHTML = 'Ошибка на сервере!';
    }
    checkResultShow.style.display = 'flex';
    setTimeout(function() {
        checkResultShow.style.display = 'none';
    }, 2500);
}

function updateProgressBar(result) {
    let keys = Object.keys(colorScheme).reverse();
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (result > key) {
            let score = result / 100;
            progressBar.style.background = colorScheme[key];
            progressBar.style.width = 'calc(100% * ' + score.toFixed(2) + ' - 11px)';
            return
        }
    }
}

function processResult(result, img) {
    if (result['status'] == 'done') {
        result = Math.min(result['result'] + bias, 100);
        showResult(result, true);
        if (result >= bestScore) {
            bestScore = result;
            updateBestShow(img);
            updateCounters();
            updateProgressBar(result);
        }
        if (result == 100) {
            endScreen(guessWord['rus'], bestVariant);
        }
    } else {
        result = result['result'];
        showResult(result, false);
    }
}

checkButton.addEventListener('click', async function() {
    if (!onChecking) {
        onChecking = true;
        let img = canvas.toDataURL('image/png');
        let checkImg = img.replace(/^data:image\/(png|jpg);base64,/, '');
        let result = await getResult(guessWord['eng'], checkImg);
        console.log(result);
        processResult(result, img);
        setTimeout(function() {
            onChecking = false;
        }, 2500);
    }
});

startScreen();
updateCounters();