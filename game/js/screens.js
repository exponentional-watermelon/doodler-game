const gameField = document.querySelector('.game-field');

export function endScreen(guessedWord, bestVariant) {
    const backBlur = document.createElement('div');
    const endScreenPanel = document.createElement('div');
    const congratText = document.createElement('p');
    const bestImg = document.createElement('div');
    const secretWord = document.createElement('p');
    const reloadText = document.createElement('p');
    const reloadButton = document.createElement('a');
    const reloadButtonSpan = document.createElement('span');

    backBlur.className = 'background-blur';
    endScreenPanel.className = 'end-screen-panel';
    congratText.className = 'congrat-text';
    bestImg.className = 'best-img';
    secretWord.className = 'guessed-word';
    reloadText.className = 'reload-text';
    reloadButton.className = 'reload-button';

    congratText.innerHTML = 'Поздравляем, ты угадал(-а) слово! Это действительно';
    bestImg.style.background = bestVariant;
    bestImg.style.backgroundPosition = 'center';
    bestImg.style.backgroundSize = 'cover';
    secretWord.innerHTML = guessedWord.toUpperCase();
    reloadText.innerHTML = 'Понравилось?';
    reloadButton.href = 'game.html';
    reloadButtonSpan.innerHTML = 'Играть снова';

    gameField.appendChild(backBlur);
    backBlur.appendChild(endScreenPanel);
    endScreenPanel.appendChild(congratText);
    endScreenPanel.appendChild(bestImg);
    endScreenPanel.appendChild(secretWord);
    endScreenPanel.appendChild(reloadText);
    endScreenPanel.appendChild(reloadButton);
    reloadButton.appendChild(reloadButtonSpan);
}

export function startScreen() {
    const backBlur = document.createElement('div');
    const startScreenPanel = document.createElement('div');
    const rulesText = document.createElement('p');
    const startButton = document.createElement('div');
    const startButtonSpan = document.createElement('span');

    backBlur.className = 'background-blur';
    startScreenPanel.className = 'start-screen-panel';
    rulesText.className = 'rules-text';
    startButton.className = 'start-button';

    rulesText.innerHTML = 'Мы загадали некоторое слово. Твоя цель не только отгадать его, но и нарисовать! За своим прогрессом ты можешь следить с помощью счетчика вверху экрана. У тебя есть один холст и безграничное количество времени и воображения. Удачи!';
    startButtonSpan.innerHTML = 'Начать';

    startButton.onclick = function() {
        backBlur.remove();
    }

    gameField.appendChild(backBlur);
    backBlur.appendChild(startScreenPanel);
    startScreenPanel.appendChild(rulesText);
    startScreenPanel.appendChild(startButton);
    startButton.appendChild(startButtonSpan);
}