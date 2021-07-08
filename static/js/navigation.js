// navigation
const svg = $("svg.blobText");
svg.on("click", function () {
    const content = $(this).attr("data-content"),
        targetSlide = $(`.Slide.${content}`)[0],
        Bounding = targetSlide.getBoundingClientRect();
    console.log(Bounding);

    gsap.to("html", { scrollTop: Bounding.top + 1000, duration: 2 });
});
