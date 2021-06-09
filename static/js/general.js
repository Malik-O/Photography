// niceScroll
$("html").niceScroll({
    cursorcolor: "#FEC17F",
    cursorborder: "none",
    cursorborderradius: "1px",
    scrollspeed: 250,
    cursoropacitymin: 0.5,
    cursoropacitymax: 0.8,
});
//
import { tl } from "./inverse.js";
// tl.play();
// matrix configurator
const matrix = (m, newFactors) => {
    let curr = m.replace(/matrix\(|\)/g, "").split(","),
        [scaleX, skewY, skewX, scaleY, translateX, translateY] = curr;
    curr = { scaleX, skewY, skewX, scaleY, translateX, translateY };
    for (let i in newFactors) curr[i] = newFactors[i];
    let final = [];
    for (let i in curr) {
        let val = curr[i].trim();
        final.push(
            `${i}(${
                !(!val.match(/[A-z]/) && i.startsWith("translate"))
                    ? val
                    : val + "px"
            })`
        );
    }
    // final.toString(" ");
    console.log(final.join(" "));
    return final.join(" ");
};
// tags
$(".Slide").each(function (i) {
    if (i) {
        const bobbleClone = $("svg#bobbles clipPath#bobbleModel")
                .clone(true)
                .attr("id", `bobble-${i}`),
            inverseClone = `<div id='i${i}' class='inverse'/>`;
        // appending the new ones
        $("svg#bobbles defs").prepend(bobbleClone);
        $(".inverses").prepend(inverseClone);
        // assign the inverse to the bobble
        $(`#i${i}`).css("clip-path", `url(#bobble-${i})`);
        // position the bobble
        bobbleClone
            .children("path")
            .css(
                "transform",
                `translate(100.5vw, ${Math.round(
                    (this.offsetTop / $("body").innerHeight()) * 100
                )}vh) scale(.3)`
            );
    }
    // helpers
    $(".tags").append(
        $('<div class="tag"/>').css(
            "top",
            `${(this.offsetTop / $("body").innerHeight()) * 100}vh`
        )
    );
});
