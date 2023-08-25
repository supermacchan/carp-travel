import { animateScroll } from "react-scroll"

export const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId) as HTMLDivElement;

    if (section) {
        const sectionTop = section.offsetTop;
        animateScroll.scrollTo(sectionTop, {
            duration: 300,
            smooth: "easeOutCubic",
        })
    }
}