const inverse = () => {
    let paths = $("[id^='bobble-'] path");
    const tl = gsap.timeline({ paused: true });
    // gsap.to(bobblePath, {
    //     attr: {
    //         d: "M28.5,-37C41.9,-29.5,61.1,-27.8,66.7,-19.6C72.3,-11.3,64.1,3.4,57.8,17.4C51.4,31.5,46.8,44.7,37.4,55C28.1,65.4,14,72.7,0.8,71.5C-12.4,70.4,-24.7,60.7,-38,51.7C-51.3,42.6,-65.4,34.3,-72.5,21.4C-79.6,8.6,-79.5,-8.6,-70.2,-18.3C-60.9,-28.1,-42.2,-30.3,-29,-37.9C-15.7,-45.5,-7.9,-58.4,-0.2,-58.2C7.5,-58,15.1,-44.5,28.5,-37Z",
    //     },
    //     duration: 2,
    // });
    // gsap.set(paths, { "transform-origin": "50px 50px", scale: 0.3 });
    paths = [...paths].reverse();
    console.log(paths);
    const colors = ["#cc642d", "#95546e", "#0e1d2e"];
    for (let i in paths) {
        tl.add(`path-${i}`);
        // bobble scale up
        tl.to(
            paths[i],
            {
                attr: {
                    d: "M47.9,-63.9C57.1,-59.2,56.2,-38.6,54.5,-22.7C52.9,-6.8,50.5,4.4,48,16.7C45.5,28.9,42.9,42.1,34.9,47.4C26.8,52.7,13.4,50,1.6,47.8C-10.2,45.6,-20.4,43.9,-26.7,38C-32.9,32.2,-35.2,22.2,-45.8,10.1C-56.3,-2,-75,-16.3,-76.2,-28.5C-77.3,-40.7,-60.9,-50.9,-45.2,-53.5C-29.6,-56.1,-14.8,-51,2.3,-54.1C19.3,-57.3,38.7,-68.5,47.9,-63.9Z",
                },
                // "transform-origin": "50px 50px",
                x: 0,
                y: 0,
                scale: 25,
                duration: 0.2,
                ease: "power1.in",
            },
            i
        );
        // text color
        tl.to(
            "*",
            {
                color: colors[i],
                ease: "power1.in",
                duration: 0.2,
            },
            i
        );
        // menu
        tl.to(
            ".menuIcon path",
            {
                stroke: colors[i],
                ease: "power1.in",
                duration: 0.2,
            },
            i
        );
        // nicescroll
        tl.to(
            ".nicescroll-cursors",
            {
                background: colors[i],
                duration: 0.2,
            },
            i
        );
    }
    //
    // gsap.to("#bobbles path", { morphSVG: "#rect" });
    // findShapeIndex("#bobbles path", "#rect");
    return tl;
};
export { inverse };
