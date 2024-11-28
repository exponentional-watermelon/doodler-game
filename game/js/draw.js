'use strict';

const canvas = document.querySelector('.draw-area');
const ctx = canvas.getContext('2d');

const sizeSlider = document.querySelector('.brush-size-change');
const brushButton = document.querySelector('.brush-tool');
const eraserButton = document.querySelector('.eraser-tool');
const brushText = document.querySelector('.brush-size-wrapper p');
const brushColorButton = document.querySelector('.color-selection');
const brushSizeForm = document.querySelector('.brush-size-change');
const cleanButton = document.querySelector('.clean-all-tool');

let isDrawing = false;
let paintingMode = true;
let eraserMode = false;

brushText.innerHTML = 'Размер кисти';

let brushColor = '#00FF00';
ctx.strokeStyle = brushColor;
ctx.lineWidth = brushSizeForm.value;

function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function stopDrawing() {
    isDrawing = false;	
}

function draw(e) {
    if (isDrawing) {
        let x = e.pageX - canvas.offsetLeft;
		let y = e.pageY - canvas.offsetTop;
		ctx.lineTo(x, y);
		ctx.stroke();
    }
}

brushButton.addEventListener('click', function() {
    if (paintingMode) {
        return 
    } else {
        paintingMode = true;
        eraserMode = false;
        ctx.strokeStyle = brushColor;
        brushButton.style.background = 'url("../game/img/paint-brush.svg") var(--bg-wood)';
        brushButton.style.backgroundPosition = 'center';
        brushButton.style.backgroundRepeat = 'no-repeat';
        eraserButton.style.background = 'url("../game/img/eraser.svg") var(--bg-white)';
        eraserButton.style.backgroundPosition = 'center';
        eraserButton.style.backgroundRepeat = 'no-repeat';
        brushText.innerHTML = 'Размер кисти';
    }
});

eraserButton.addEventListener('click', function() {
    if (eraserMode) {
        return 
    } else {
        paintingMode = false;
        eraserMode = true;
        ctx.strokeStyle = 'white';
        brushButton.style.background = 'url("../game/img/paint-brush.svg") var(--bg-white)';
        brushButton.style.backgroundPosition = 'center';
        brushButton.style.backgroundRepeat = 'no-repeat';
        eraserButton.style.background = 'url("../game/img/eraser.svg") var(--bg-wood)';
        eraserButton.style.backgroundPosition = 'center';
        eraserButton.style.backgroundRepeat = 'no-repeat';
        brushText.innerHTML = 'Размер ластика';
    }
});

cleanButton.addEventListener('click', function() {
    ctx.fillRect(0, 0, 600, 500);
    ctx.fill();
});

brushSizeForm.addEventListener('input', function(e) {
    ctx.lineWidth = e.target.value;
});

brushColorButton.addEventListener('input', function(e) {
	brushColor = e.target.value;
    ctx.strokeStyle = e.target.value;
});

canvas.onmousedown = startDrawing;
canvas.onmouseup = stopDrawing;
canvas.onmouseout = stopDrawing;
canvas.onmousemove = draw;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 600, 500);
ctx.fill();
