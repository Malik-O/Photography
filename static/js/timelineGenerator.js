// Dependencies
import { themeStyle } from "./themeStyle.js";
// the class
let i = 0;
class timelineGenerator {
    constructor({ gallery }) {
        const tl = gsap.timeline({ paused: true }),
            heading = $(gallery).children(".heading"),
            col = $(gallery).children(".col");
        // center the heading
        heading.css({
            top: `calc(50vh - ${heading.height() / 2}px)`,
            left: `calc(50vw - ${heading.width() / 2}px)`,
        });
        tl.add(themeStyle(i++));
        // heading fade in
        tl.fromTo(
            heading.find(".char"),
            {
                y: -40,
                x: -10,
                opacity: 0,
                rotate: -20,
            },
            {
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 0,
                stagger: 0.1,
                ease: "elastic.out(1, 0.3)",
                duration: 3,
            }
        );
        tl.addLabel($(gallery).attr("data-content"));
        console.log($(gallery).attr("class"));
        // animate the photos columns
        let columnsDuration = 10;
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
    }
    // end the big timeline
    static end() {
        i = 0;
    }
}
// export
export { timelineGenerator };
