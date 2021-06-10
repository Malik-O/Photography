const tagsPositioner = (Slides) => {
    Slides.each(function (i) {
        if (i) {
            const bobbleClone = $("svg#bobbles clipPath#bobbleModel")
                    .clone(true)
                    .attr("id", `bobble-${i}`),
                inverseClone = `<div id='i${i}' class='inverse'/>`;
            // appending the new ones
            $("svg#bobbles defs").prepend(bobbleClone);
            $(".inverses").append(inverseClone);
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
        // $(".tags").append(
        //     $('<div class="tag"/>').css(
        //         "top",
        //         `${(this.offsetTop / $("body").innerHeight()) * 100}vh`
        //     )
        // );
    });
};
// export
export { tagsPositioner };
