import gsap from "../gsap.js";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateSolution = () => {
    const cards = document.querySelectorAll('.solution__card');

    cards.forEach((card, i) => {
        const icon = card.querySelector('.solution__card-img');
        const title = card.querySelector('.solution__card-title');
        const text = card.querySelector('.solution__card-text');

        gsap.fromTo(card, 
            { opacity: 0, y: 60 },
            { 
                opacity: 1, 
                y: 0,
                duration: 0.8,
                delay: i * 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        gsap.fromTo(icon, 
            { opacity: 0, scale: 0.6 },
            { 
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: 0.3 + i * 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        gsap.fromTo([title, text],
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.4 + i * 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );
    });
};

export default animateSolution;
