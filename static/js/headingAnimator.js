$(".splitter span.char").on("mouseover", function () {
    gsap.to(this, {
        scale: 0.7,
        duration: 0.3,
    });
    gsap.to(this, {
        scale: 1,
        ease: "elastic.out(1.5, 0.3)",
        duration: 1,
        delay: 0.3,
    });
    // console.log($(this));
});
