// niceScroll
class niceScrollGenerator {
    static add() {
        $("html").css({ overflow: "visible" });
        $("html").niceScroll({
            cursorcolor: $("body").css("color"),
            cursorborder: "none",
            cursorborderradius: "1px",
            scrollspeed: 250,
            cursoropacitymin: 0.5,
            cursoropacitymax: 0.8,
        });
    }
    static remove() {
        $("html").getNiceScroll().remove();
        $("html").css({ overflow: "hidden" });
    }
}
// export
export { niceScrollGenerator };
