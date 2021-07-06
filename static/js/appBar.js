// Dependencies
import { blobEventSwitcher } from "./blobAnimator.js";
// activate the menu
$(".menuIcon").on("click", () => {
    $(".menuIcon, .menu, .logo").addClass("active");
    // deactivate scrolling
    $("html").getNiceScroll().remove();
    $("html").css({ overflow: "hidden" });
    // menu fade in animation
    const tl = gsap.timeline();
    tl.set(".menuBlur", { "pointer-events": "auto" });
    tl.to(".menuBlur", {
        opacity: 1,
    });
    tl.from(".menu ul li .char", {
        opacity: 0,
        x: 20,
        stagger: {
            amount: 1,
        },
        duration: 1,
    });
    // pause blob animation
    blobEventSwitcher("remove");
});
// deactivate the menu
$(window).on("click", (e) => {
    if ($(e.target).hasClass("menuBlur")) {
        $(".menuIcon, .menu, .logo").removeClass("active");
        // reactivate the scrolling
        $("html").css({ overflow: "visible" });
        $("html").niceScroll({
            cursorcolor: $("*").css("color"),
            cursorborder: "none",
            cursorborderradius: "1px",
            scrollspeed: 250,
            cursoropacitymin: 0.5,
            cursoropacitymax: 0.8,
        });
        //
        const tl = gsap.timeline();
        tl.set(".menuBlur", { "pointer-events": "none" });
        tl.to(".menuBlur", {
            opacity: 0,
        });
        // pause blob animation
        blobEventSwitcher();
    }
});
