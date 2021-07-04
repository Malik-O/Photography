// vars
const colors = ["#261014", "#0e1d30", "#985713"];
const numLines = 1;
let currCount = numLines;
const texts = document.querySelectorAll("#textClip text");
const blobs = document.querySelectorAll("#background path");
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
        console.log("none", texts, i);
        texts[i].style.display = "none";
    }
    // Show new set of lines
    for (let j = currCount; j < currCount + numLines; j++) {
        console.log("inline", texts, j);
        texts[j].style.display = "inline";
    }
    currCount += numLines;
    if (currCount >= texts.length) {
        currCount = 0;
    }
};
// listen to animation of one blobs
blobs[0].addEventListener("animationiteration", iteration);
