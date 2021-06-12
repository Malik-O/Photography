const tagsPositioner = (Slides) => {
    Slides.each(function (i) {
        if (i) {
            const bobbleClone = $("svg#bobbles path#bobbleModel")
                .clone(true)
                .attr("id", `bobble-${i}`);
            // appending the new ones
            $("svg#bobbles").prepend(bobbleClone);
            // position the bobble
            // bobbleClone
            //     .children("path")
            //     .css(
            //         "transform",
            //         `translate(100.5vw, ${Math.round(
            //             (this.offsetTop / $("body").innerHeight()) * 100
            //         )}vh) scale(.3)`
            //     );
        }
        // helpers
        // $(".tags").append(
        //     $('<div class="tag"/>').css(
        //         "top",
        //         `${(this.offsetTop / $("body").innerHeight()) * 100}vh`
        //     )
        // );
    });
    console.log($("svg#bobbles [id^='bobble-']"));
};
// export
export { tagsPositioner };
