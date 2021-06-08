const timelineGenerator = (g) => {
    const tl = gsap.timeline({ paused: true }),
        heading = g.children(".heading"),
        col = g.children(".col");
    heading.css({
        top: `calc(50vh - ${heading.height() / 2}px)`,
        left: `calc(50vw - ${heading.width() / 2}px)`,
    });
    col.each(function (i) {
        let height = -$(this).innerHeight();
        tl.fromTo(
            this,
            {
                top: !!(i % 2) ? 100 + "%" : height,
            },
            {
                top: !!(i % 2) ? height : 100 + "%",
                duration: 1,
            },
            `-=${Number(!!i)}`
        );
    });
    return tl;
};
// export
export { timelineGenerator };
