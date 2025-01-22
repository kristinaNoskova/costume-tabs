window.addEventListener('DOMContentLoaded', () => {
    const infoTab = document.querySelector('.info__header');
    const tabElements = document.querySelectorAll('.info__header-tab');
    const tabContentElements = document.querySelectorAll('.info__tabcontent');

    const hideTabContent = (a) => {
        for (let i = a; i < tabElements.length; i++) {
            tabContentElements[i].classList.remove('show');
            tabContentElements[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    const showTabContent = (b) => {
        if (tabContentElements[b].classList.contains('hide')) {
            tabContentElements[b].classList.remove('hide');
            tabContentElements[b].classList.add('show');
        }
    }

    infoTab.addEventListener('click', (evt) => {
        const target = evt.target.closest('.info__header-tab');

        if (!target) {
            return;
        }

        for (let i = 0; i < tabElements.length; i++) {
            if (target === tabElements[i]) {
                hideTabContent(0);
                showTabContent(i)
            }
        }
    })

});