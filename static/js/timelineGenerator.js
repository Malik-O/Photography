const timelineGenerator = (g) => {
    const tl = gsap.timeline({ paused: true }),
        heading = g.children(".heading"),
        col = g.children(".col");
    // center the heading
    heading.css({
        top: `calc(50vh - ${heading.height() / 2}px)`,
        left: `calc(50vw - ${heading.width() / 2}px)`,
    });
    // heading fade in
    tl.from(heading.find(".char"), {
        y: -40,
        x: -10,
        opacity: 0,
        rotate: -20,
        stagger: 0.1,
        duration: 1,
    });
    // animate the photos columns
    let columnsDuration = 3;
    col.each(function (i) {
        let height = -$(this).innerHeight(),
            odd = !!(i % 2);
        tl.fromTo(
            this,
            {
                top: odd ? "100%" : height,
            },
            {
                top: odd ? height : "100%",
                duration: columnsDuration,
            },
            `-=${Number(!!i) * columnsDuration}`
        );
    });
    // heading fade in
    tl.to(heading, {
        scale: 0.9,
        opacity: 0,
        duration: 0.2,
    });
    // return
    return tl;
};
// export
export { timelineGenerator };
