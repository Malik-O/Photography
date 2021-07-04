// Dependencies
import { changeColor } from "./changeColor.js";
// vars
const sizes = { x: $(window).innerWidth(), y: $(window).innerHeight() },
    colors = [
        { type: "default", text: "#272C2D", background: "#e9e9e9" },
        { text: "#cc642d", background: "#261014" },
        { text: "#95546e", background: "#0e1d30" },
        { text: "#0e1d2e", background: "#985713" },
    ];
let duration = 0.8,
    stages = $("#bobbles g#stages").children().length;
console.log(stages);
// set default theme color
changeColor({ color: colors[0].text });
// remove default from colors
colors.shift();
// themeStyle
const themeStyle = (i) => {
    console.log("theme" + i);
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
    tl.to(
        paths[i],
        {
            duration,
            scale: 1.5,
            "transform-origin": "10%",
            // delay: duration / 2,
            // graph: 1,
            // ease: Bounce.easeOut,
            onStart: () => console.log(`path ${i} scaling completed`),
        }
        // duration - 0.2
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
        morphSVG: { shape: "#bobbles g#stages #stage-3", shapeIndex: 1 },
        duration: duration / stages,
        // graph: 1,
        // ease: Bounce.easeOut,
        onStart: () => console.log(`path ${i} stage 3 completed`),
    });
    // change color
    changeColor({
        color: colors[i].text,
        i,
        scope: tl,
        method: "to",
        duration,
    });
    // next path to stage 0
    // if (paths[i + 1])
    //     tl.to(paths[i + 1], {
    //         morphSVG: "#bobbles g#stages #stage-0",
    //         duration: duration / stages,
    //         // graph: 1,
    //         ease: Bounce.easeOut,
    //         onStart: () => console.log(`path ${i} stage 0 completed`),
    //     });
    return tl;
};
export { themeStyle };
