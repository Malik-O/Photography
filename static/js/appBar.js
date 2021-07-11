// Dependencies
import { timelineGenerator } from "./timelineGenerator.js";
import { blobEventSwitcher } from "./blobAnimator.js";
import { niceScrollGenerator } from "./niceScrollGenerator.js";
import { Wizard } from "./wizard.js";
// activate the menu
$(".menuIcon").on("click", () => {
    $(".menuIcon, .menu, .logo").addClass("active");
    // deactivate scrolling
    niceScrollGenerator.remove();
    // menu fade in animation
    const tl = gsap.timeline();
    tl.set(".menuBlur", { "pointer-events": "auto" });
    tl.to(".menuBlur", {
        opacity: 1,
    });
    tl.fromTo(
        ".menu ul li .char",
        {
            opacity: 0,
            x: 20,
        },
        {
            opacity: 1,
            x: 0,
            stagger: { amount: 1 },
            duration: 1,
        }
    );
    // pause blob animation
    blobEventSwitcher("remove");
});
// deactivate the menu
$(window).on("click", (e) => {
    if ($(e.target).hasClass("menuBlur")) {
        $(".menuIcon, .menu, .logo").removeClass("active");
        // reactivate the scrolling
        niceScrollGenerator.add();
        // regenerate the timeline
        const wizards = Wizard.getAll();
        let i = 0;
        $(".gallery").each(function () {
            const tl = new timelineGenerator({ gallery: this });
            wizards[i++].setTween(tl);
        });
        timelineGenerator.end();
        // trigger scroll event
        $(window).trigger("scroll");
        // fade in the blur layer
        gsap.set(".menuBlur", { "pointer-events": "none" });
        gsap.to(".menuBlur", {
            opacity: 0,
        });
        // pause blob animation
        blobEventSwitcher();
    }
});
