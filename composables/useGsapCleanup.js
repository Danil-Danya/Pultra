import { onBeforeUnmount } from 'vue'
import gsap from '@/plugins/animations/gsap'

export function useGsapCleanup () {
    onBeforeUnmount(() => {
        gsap.killTweensOf('*')

        const ScrollTrigger = gsap.core.globals().ScrollTrigger
        if (ScrollTrigger) {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

        ScrollTrigger.refresh()
    })
}
