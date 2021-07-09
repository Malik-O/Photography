const contactTimeline = () => {
    const tl = gsap.timeline({ paused: true });
    tl.from(".ContactMe *", { opacity: 0, y: 20, stagger: 0.1 });
    return tl;
};
//
export { contactTimeline };
