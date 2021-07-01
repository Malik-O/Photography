const sizes = { x: $(window).innerWidth(), y: $(window).innerHeight() },
    colors = [
        { text: "#95546e", background: "#0e1d30" },
        { text: "#cc642d", background: "#261014" },
        { text: "#0e1d2e", background: "#985713" },
    ];
const themeStyle = (i) => {
    let paths = $("#bobbles path[id^='bobble-']");
    const tl = gsap.timeline();
    paths = [...paths];
    console.log(paths);
    // set the sage 3 to the window size
    gsap.set("#bobbles g#stages #stage-3", {
        attr: {
            d: `M 0 0 L ${sizes.x} 0 L ${sizes.x} ${sizes.y} L 0 ${sizes.y} Z`,
        },
    });
    // set the bobble color
    gsap.set(paths[i], { fill: colors[i].background });
    // bobble scale up
    // stage 1
    let duration = 1,
        stages = 3;
    tl.to(
        paths[i],
        {
            duration,
            scale: 2,
            "transform-origin": "10%",
            // graph: 1,
            // ease: Bounce.easeOut,
            onStart: () => console.log(`path ${i} scaling completed`),
        },
        0
    );
    tl.to(
        paths[i],
        {
            morphSVG: "#bobbles g#stages #stage-1",
            duration: duration / stages,
            // graph: 1,
            // ease: Bounce.easeOut,
            onStart: () => console.log(`path ${i} stage 1 completed`),
        },
        i + 0.1
    );
    // stage 2
    tl.to(paths[i], {
        morphSVG: "#bobbles g#stages #stage-2",
        duration: duration / stages,
        // graph: 1,
        // ease: Bounce.easeOut,
        onStart: () => console.log(`path ${i} stage 2 completed`),
    });
    // stage 3
    tl.to(paths[i], {
        morphSVG: "#bobbles g#stages #stage-3",
        duration: duration / stages,
        // graph: 1,
        // ease: Bounce.easeOut,
        onStart: () => console.log(`path ${i} stage 3 completed`),
    });
    // text color
    tl.to(
        "*",
        {
            color: colors[i].text,
            ease: "power1.in",
            duration,
        },
        i + 0.1
    );
    // menu icon color
    tl.to(
        ".menuIcon path, .logo circle",
        {
            stroke: colors[i].text,
            ease: "power1.in",
            duration,
        },
        i + 0.1
    );
    // nicescroll curser color
    console.log($(".nicescroll-cursors"));
    tl.to(
        ".nicescroll-cursors",
        {
            background: colors[i].text,
            duration,
        },
        i + 0.1
    );
    return tl;
};
export { themeStyle };
