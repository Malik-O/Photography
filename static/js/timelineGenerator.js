const timelineGenerator = (g) => {
    const tl = gsap.timeline({ paused: true }),
        heading = g.children(".heading"),
        col = g.children(".col");
    heading.css({
        top: `calc(50vh - ${heading.height() / 2}px)`,
        left: `calc(50vw - ${heading.width() / 2}px)`,
    });
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
                duration: 1,
            },
            `-=${Number(!!i)}`
        );
    });
    return tl;
};
// export
export { timelineGenerator };
