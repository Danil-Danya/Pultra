import gsap from "../gsap.js";

const animateAbout = () => {
    const title = document.querySelector('.about__title');

    const aboutLeft = document.querySelector('.about__left>img');
    const aboutRight = document.querySelector('.about__right-content');

    gsap.fromTo(title, {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            markers: false,
            toggleActions: 'play none none none'
        }
    })

    gsap.fromTo(aboutLeft, {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: aboutLeft,
            start: 'top 75%',
            markers: false,
            toggleActions: 'play none none none'
        }
    })

    gsap.fromTo(aboutRight, {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: aboutRight,
            markers: false,
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    })
}

export default animateAbout;