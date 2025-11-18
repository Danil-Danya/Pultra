import gsap from "../gsap.js";

const initTopButton = () => {
    const btn = document.querySelector('.top-button');
    if (!btn) {
        return;
    }

    gsap.fromTo(btn,
        {
            y: 80,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',

            scrollTrigger: {
                start: 2500,
                toggleActions: "play reverse play reverse",
                //markers: true
            }
        }
    );
};

export default initTopButton;

