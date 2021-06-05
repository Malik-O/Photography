const tl = gsap.timeline({ paused: true });
tl.to(".gallery .col:nth-of-type(2)", {
    y: -500,
    duration: 1,
});
//
let amount = 100;
let i = 0;
$(".play").on("click", () => {
    tl.play();
    setTimeout(() => tl.pause(), amount);
});
$(".reverse").on("click", () => {
    tl.reverse();
    setTimeout(() => tl.pause(), amount);
});
// var controller = new ScrollMagic.Controller(),
//     scene = new ScrollMagic.Scene({
//         triggerElement: ".gallery:nth-of-type(2)",
//         triggerHook: 0,
//         duration: "100%",
//     });
// scene.setPin(".gallery:nth-of-type(2)");
// scene.setTween(tl);
// // scene.addIndicators();
// scene.addTo(controller);

// console.log(slide);
