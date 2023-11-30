'use strict';
// classes declaration
const btnOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
// function that add hidden to class modal hidden and overlay hidden
const addHidden = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
// function that remove hidden to class modal hidden and overlay hidden
const removeHidden = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
//btnOpenModal->List containe 3 Buttons that remove hidden from  class modal hidden and overlay hidden
for (let i = 0; i < btnOpenModal.length; i++) {
    //code that remove hidden from modal hidden and overlay hidden that active the modal and overlay
    btnOpenModal[i].addEventListener('click', removeHidden);
}
// X(close btn) button that return hidden to class modal hidden that make it display: none
btnCloseModal.addEventListener('click', addHidden);
//overlay area that when click on it return hidden to class overlay hidden that make overlay removed
overlay.addEventListener('click', addHidden);
//keyboard Event esc to close the modal and retuern hidden to modal and overlay
const key = document.addEventListener('keydown', function (e) {
    //if key that preesed is Escape and modal DOES Not Contains hidden (modal is shown)
    // it mean it is shown the modal so we call hidden func that add hidden to modal and overlays
    // if(mode.classList.contains('hidden')) it mean True (mean it has hidden)->(modal is closed)
    // So we use ! to be if it not true mean it does not have hidden so modal is shown
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        addHidden();
    }
});
