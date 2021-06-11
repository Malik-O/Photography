// variables
const curser = $("#curser"),
    outerCurser = $("#outerCurser"),
    curserCenter = [curser.outerWidth() / 2, curser.outerHeight() / 2],
    outerCurserCenter = [
        outerCurser.outerWidth() / 2,
        outerCurser.outerHeight() / 2,
    ];
gsap.defaults({
    ease: Power0,
});
// set up curser position
gsap.set(curser, {
    x: $(window).width() / 2 + curserCenter[0],
    y: $(window).height() - curserCenter[1],
    scale: 2,
});
// movement  event
$(window).on({
    mousemove(e) {
        // hover curser
        gsap.set(curser, {
            x: e.clientX - curserCenter[0],
            y: e.clientY - curserCenter[1],
        });
        gsap.to(outerCurser, {
            x: e.clientX - outerCurserCenter[0],
            y: e.clientY - outerCurserCenter[1],
            duration: 0.8,
        });
        // }
        // curser pointer
        // if (hovering) {
        //     if (hovering.ele.hasClass("curser_pointer_active")) {
        //         // pointer curser
        //         gsap.to(curser, {
        //             x: e.clientX - curserCenter[0],
        //             y: e.clientY - curserCenter[1],
        //             scale: 0,
        //             duration: 0.6,
        //             ease: Power0,
        //         });
        //         gsap.to(outerCurser, {
        //             x:
        //                 hovering.left +
        //                 hovering.width / 2 -
        //                 outerCurserCenter[0],
        //             y:
        //                 hovering.top +
        //                 hovering.height / 2 -
        //                 outerCurserCenter[1],
        //             duration: 0.6,
        //             scale: 1.4,
        //             ease: Power0,
        //         });
        //     }
        //     // add the hover class
        //     hovering.ele.addClass("curser_hovering");
        // }
    },
});
// curser pointer
$(".curser-pointer").on({
    mouseenter: (e) => {
        gsap.to(outerCurser, {
            background: "#fff",
            scale: 1.5,
            duration: 0.5,
        });
        gsap.to(curser, {
            background: "transparent",
            duration: 0.2,
        });
    },
    mouseleave: () => {
        gsap.to(outerCurser, {
            background: "transparent",
            scale: 1,
            duration: 0.5,
        });
        gsap.to(curser, {
            background: "#fff",
            duration: 0.2,
        });
    },
});
