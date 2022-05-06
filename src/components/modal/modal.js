const modalOpenBtns = document.querySelectorAll('[data-id="openmodal"]');
const modalCloseBtns = document.querySelectorAll('[data-id="closemodal"]');
const modal = document.querySelector('.modal-js');

const closeModal = () => {
    modal.classList.remove('modal_opened');
    modalCloseBtns.forEach(btn => btn.removeEventListener('click', closeModal));
}

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
};
  
const checkPressOverlay = (e) => {
    if (e.target === modal) {
        closeModal();
    }
};
  
const openModal = () => {    
    modal.classList.add('modal_opened');
    modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));
}

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));
modalOpenBtns.forEach(btn => btn.addEventListener('click', openModal));