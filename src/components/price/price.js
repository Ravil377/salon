const price = document.querySelector('.price__list');
price && price.addEventListener('click', (e) => openTab(e));

const openTab = (e) => {
    const tab = e.target;
    if(price.querySelector('._active')) {
        price.querySelector('._active').classList.remove('_active');
    } 
    tab.firstElementChild.classList.add('_active');
}