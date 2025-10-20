import gsap from "../gsap.js";

const animateProject = () => {
    const title = document.querySelector('.project__title');
    const cards = document.querySelectorAll('.project__card');

    gsap.fromTo(title, {
        y: -50,
        opacity: 0
    }, {
        y: 0,
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

    cards.forEach((card) => {
        gsap.fromTo(card, {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                markers: false,
                toggleActions: 'play none none none'
            }
        })
    })
}

export default animateProject;