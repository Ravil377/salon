const tabs = document.querySelector('.schedule__tabs');
tabs && tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.schedule__tab');
    const id = tab.dataset.day;
    if(tab) {
        tabs.querySelector('.schedule__tab_active').classList.remove('schedule__tab_active');
        tab.classList.add('schedule__tab_active');
        tabContentActive(id);
    }
})

const tabContentActive = (id) => {
    document.querySelector('.schedule__tab-content_active').classList.remove('schedule__tab-content_active');
    document.querySelector(`[id = "${id}"]`).classList.add('schedule__tab-content_active');

}
