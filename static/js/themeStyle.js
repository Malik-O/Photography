// Dependencies
import { changeColor } from "./changeColor.js";
// vars
const colors = [
    { type: "default", text: "#272C2D", background: "#e9e9e9" },
    { text: "#cc642d", background: "#261014" },
    { text: "#95546e", background: "#0e1d30" },
    { text: "#0e1d2e", background: "#985713" },
];
let duration = 1.5,
    stages = $("#bobbles g#stages").children().length;
// set default theme color then remove it
changeColor({ toColor: colors[0].text });
// colors.shift();
// set sage 3
const setStage3 = () => {
    const sizes = { x: $(window).innerWidth(), y: $(window).innerHeight() };
    gsap.set("#bobbles g#stages #stage-3", {
        attr: {
            d: `M 0 0 L ${sizes.x} 0 L ${sizes.x} ${sizes.y} L 0 ${sizes.y} Z`,
        },
    });
};
// themeStyle
const themeStyle = (i) => {
    let paths = $("#bobbles path[id^='bobble-']");
    const tl = gsap.timeline();
    paths = [...paths];
    console.log(paths[i]);
    // set the sage 3 to the window size
    setStage3();
    // set the bobble color
    gsap.set(paths[i], { fill: colors[i + 1].background });
    // stage 0
    gsap.set(paths[i], {
        morphSVG: "#bobbles g#stages #stage-0",
    });
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
        fromColor: colors[i].text,
        toColor: colors[i + 1].text,
        i,
        scope: tl,
        method: "fromTo",
        duration,
    });
    // return
    return tl;
};
export { themeStyle };
