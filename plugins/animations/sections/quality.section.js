import gsap from "../gsap.js";

const animateQuality = () => {
    const infoLeft = document.querySelector('.quality__info-left>.quality__title');
    const infoRight = document.querySelector('.quality__info-right>.quality__info-content-container');

    const presentationLeft = document.querySelector('.quality__presentation-left>img');
    const presentationRight = document.querySelector('.quality__presentation-right>form');

    if (window.innerWidth > 420) {
        gsap.fromTo(infoLeft, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: infoLeft,
                start: 'top 90%',
                markers: false,
                toggleActions: 'play none none none'
            }
        })
    
        gsap.fromTo(infoRight, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: infoRight,
                start: 'top 90%',
                markers: false,
                toggleActions: 'play none none none'
            }
        })
    
        gsap.fromTo(presentationLeft, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: presentationLeft,
                start: 'top 90%',
                markers: false,
                toggleActions: 'play none none none'
            }
        })
    
        gsap.fromTo(presentationRight, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: presentationRight,
                start: 'top 90%',
                markers: false,
                toggleActions: 'play none none none'
            }
        })
    }
}

export default animateQuality;