import gsap from "../gsap.js";

const animateSolution = () => {
    const firstTitle = document.querySelector('.title-bottom.top.title.solution__card>.solution__title-head');
    const secondTitle = document.querySelector('.solution__card.title-top.bottom.title>.solution__title-head');

    const cards = document.querySelectorAll('.solution__card-content');
    const container = document.querySelector('.solution__container')

    gsap.fromTo(firstTitle, {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: firstTitle,
            start: 'top 90%', 
            toggleActions: 'play none none none'
        }
    })

    gsap.fromTo(secondTitle, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: {
            trigger: firstTitle,
            start: 'top 90%', 
            toggleActions: 'play none none none'
        }
    })

    cards.forEach((card, i) => {
        gsap.fromTo(card, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        })
    })
}

export default animateSolution;