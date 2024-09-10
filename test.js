const nav = document.querySelector('.header__inline-menu');
const ulElements = nav.querySelectorAll('ul[role="list"]');

ulElements.forEach((ulElement) => {
    const liElements = ulElement.querySelectorAll('li');
    liElements.forEach((liElement) => {
        liElement.classList.add('d-menu');
        const aElement = liElement.querySelector('a');
        aElement.classList.add('d-menu__link');
        const subUlElement = liElement.querySelector('ul');
        if (subUlElement) {
            liElement.classList.add('has-sub-menu');
            const subLiElements = subUlElement.querySelectorAll('li');
            subLiElements.forEach((subLiElement) => {
                subLiElement.classList.add('d-sub-menu');
                const subAElement = subLiElement.querySelector('a');
                subAElement.classList.add('d-sub-menu__link');
            });
        }
    });
});