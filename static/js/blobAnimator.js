// Dependencies
import { Wizard } from "./wizard.js";
//
// $(".Heading").each(function () {
//     const tl = gsap.timeline({ paused: true }),
//         galleryWizard = new Wizard({
//             triggerElement: this,
//             triggerHook: 0,
//             duration: 5,
//         });
//     tl.from($(".Heading .splitter"), {
//         y: -30,
//         stagger: 0.1,
//     });
//     galleryWizard.setTween(tl);
//     galleryWizard.setPin(this);
// });
// vars
const colors = ["#261014", "#0e1d30", "#985713"];
const numLines = 1;
let currCount = numLines;
const svg = document.querySelector("svg.blobText"),
    texts = document.querySelectorAll("#textClip text"),
    blobs = document.querySelectorAll("#background path");
// random color for each blob
const colorBlobs = () => {
    blobs.forEach((blob) => {
        blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
    });
};
colorBlobs();
// each iteration
const iteration = () => {
    // Change the color of all the blobs
    colorBlobs();
    // Hide the old set of lines
    let startVal = currCount - numLines;
    if (startVal < 0) {
        startVal = texts.length - numLines;
    }
    for (let i = startVal; i < startVal + numLines; i++) {
        texts[i].style.display = "none";
    }
    // Show new set of lines
    for (let j = currCount; j < currCount + numLines; j++) {
        texts[j].style.display = "inline";
    }
    currCount += numLines;
    if (currCount >= texts.length) {
        currCount = 0;
    }
};
// add and remove listener to animation of one blobs
let animationName;
const blobEventSwitcher = (state = "add") => {
    blobs[0][`${state}EventListener`]("animationiteration", iteration, true);
    // assign the animation or removing it
    if (state == "remove")
        animationName = $(".text svg #background path").css("animation-name");
    $(".text svg #background path").css(
        "animation-name",
        state == "add" ? animationName : "none"
    );
};
blobEventSwitcher();
// the event
$("svg.blobText").on({
    mouseenter: () => blobEventSwitcher("remove"),
    mouseleave: () => blobEventSwitcher(),
});
// export
export { blobEventSwitcher };
