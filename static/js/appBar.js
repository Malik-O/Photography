// activate the menu
$(".menuIcon").on("click", () => {
    $(".menu").addClass("active");
    const tl = gsap.timeline();
    tl.set(".menu", { display: "block" });
    tl.to(".menu .blur", {
        opacity: 1,
    });
    $("html").getNiceScroll().remove();
    $("html").css({ overflow: "hidden" });
    // $("#outerCurser").addClass("cross");
    //
    const ul = $(".menu ul");
    console.log(ul.height());
    // tl.then(() => {
    //     ul.css({
    //         top: `calc(30vh - ${ul.height() / 2}px)`,
    //         left: `calc(30vw - ${ul.width() / 2}px)`,
    //     });
    // });
    tl.from(".menu ul li .char", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
    });
});
// $(".menu ul li").on({
//     mouseenter: function () {
//         console.log($(this).find(".char"));
//         gsap.to($(this).find(".char"), {
//             x: 30,
//             stagger: 0.1,
//             // "letter-spacing": "0.1rem",
//         });
//         // gsap.to($(this).find(".char"), {
//         //     y: 10,
//         //     stagger: 0.1,
//         // });
//         // gsap.to($(this).find(".char"), {
//         //     y: 0,
//         //     stagger: 0.1,
//         //     delay: 0.3,
//         // });
//     },
//     mouseleave: function () {
//         console.log(this);
//         gsap.to($(this).find(".char"), {
//             x: 0,
//             // "letter-spacing": "0.8rem",
//         });
//     },
// });
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
        //
        $("html").niceScroll({
            cursorcolor: "#FEC17F",
            cursorborder: "none",
            cursorborderradius: "1px",
            scrollspeed: 250,
            cursoropacitymin: 0.5,
            cursoropacitymax: 0.8,
        });
        // $("#outerCurser").removeClass("cross");
    }
});
