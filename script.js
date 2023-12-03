'use strict';

// modal variables
const overlay = document.querySelector('[data-overlay]');
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal functions
const modalOpenFunc = function() {
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

const modalCloseFunc = function() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}


// modal event Listener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}
