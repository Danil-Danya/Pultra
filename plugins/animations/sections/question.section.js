import gsap from "../gsap.js";

const animateQuestion = () => {
    const questionLeft = document.querySelector('.question__left');
    const questionRight = document.querySelector('.question__right');

    if (window.innerWidth > 1020) {
        gsap.fromTo(questionLeft, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: questionLeft,
                start: 'top 80%',
                markers: false,
                toggleActions: 'play none none none'
            }
        })

        gsap.fromTo(questionRight, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: questionRight,
                start: 'top 80%',
                markers: false,
                toggleActions: 'play none none none'
            }
        })
    }
}

export default animateQuestion;