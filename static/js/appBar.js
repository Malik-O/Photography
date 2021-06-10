// activate the menu
$(".menuIcon").on("click", () => {
    $(".menu").addClass("active");
    const tl = gsap.timeline();
    tl.set(".menu", { display: "block" });
    tl.to(".menu .blur", {
        opacity: 1,
    });
    // $(window).off("scroll");
    // $("html").niceScroll({ cursorcolor: "#999", enablekeyboard: false });
    $("html").getNiceScroll().remove();
    $("html").css({ overflow: "hidden" });
    // $("html,body").attr({ scroll: "no" });
});
// deactivate the menu
// $(".menu.active ul li").on("click", () => {
// });
$(window).on("click", (e) => {
    if ($(e.target).hasClass("blur")) {
        const tl = gsap.timeline();
        $(".menu").removeClass("active");
        tl.to(".menu .blur", {
            opacity: 0,
        });
        tl.set(".menu", { display: "none" });
        $("html").css({ overflow: "visible" });
        $("html").niceScroll({
            cursorcolor: "#FEC17F",
            cursorborder: "none",
            cursorborderradius: "1px",
            scrollspeed: 250,
            cursoropacitymin: 0.5,
            cursoropacitymax: 0.8,
        });
    }
});
