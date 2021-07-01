const bobblesPosition = (Slides) => {
    $(Slides).each(function (i) {
        if (i == 1) {
            const bobbleClone = $("svg#bobbles path#bobbleModel")
                .clone(true)
                .attr("id", `bobble-${i}`);
            // appending the new ones
            $("svg#bobbles").prepend(bobbleClone);
        }
    });
};
// export
export { bobblesPosition };
