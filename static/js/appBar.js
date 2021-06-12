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
    //
    const ul = $(".menu ul");
    console.log(ul.height());
    tl.from(".menu ul li .char", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
    });
});
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
    }
});
