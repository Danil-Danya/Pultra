import gsap from "../gsap.js";

const animateCatalog = () => {
    const title = document.querySelector('.catalog__title');
    const cards = document.querySelectorAll('.catalog__card');

    gsap.fromTo(title, {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: title,
            start: 'top 90%', 
            markers: false,
            toggleActions: 'play none none none'
        }
    })

    cards.forEach(card => {
        gsap.fromTo(card, {
            y: 200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                markers: false,
                start: 'top 100%',
                toggleActions: 'play none none none'
            }
        })
    })
}

export default animateCatalog;