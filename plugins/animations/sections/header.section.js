import gsap from "../gsap.js";

const animateHeader = () => {
    const headerText = document.querySelector('.header__text');
    const headerTitle = document.querySelector('.header__title');
    const headerButtons = document.querySelector('.header__button-container');

    gsap.fromTo(headerTitle, {
         x: -100,
        opacity: 0
    }, {
         x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8, 
        ease: 'power2.out'
    });

    gsap.fromTo(headerButtons, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.6, 
        ease: 'power2.out'
    });

    gsap.fromTo(headerText, {
        x: 100,
        opacity: 0
    }, {
         x: 0,
        opacity: 1,
        duration: 1,
        delay: 2.4, 
        ease: 'power2.out'
    });
}

export default animateHeader;