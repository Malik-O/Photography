var activeElements = [];
$(".Slide .splitter span.char").on("mouseover", function (e) {
    let effected =
        e.ctrlKey | e.shiftKey | e.altKey ? $(this).parent()[0] : this;
    if (activeElements.indexOf(effected) == -1) {
        activeElements.push(effected);
        // time line
        const tl = gsap.timeline();
        tl.to(effected, {
            scale: 0.8,
            duration: 0.3,
        });
        tl.to(effected, {
            scale: 1,
            ease: "elastic.out(1.5, 0.3)",
            duration: 1,
            delay: 0.3,
        });
        // clear the array
        setTimeout(() => {
            activeElements.splice(activeElements.indexOf(effected));
        }, 1300);
    }
});
