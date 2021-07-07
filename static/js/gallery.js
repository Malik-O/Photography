// Dependencies
import { changeColor } from "./changeColor.js";
import { timelineGenerator } from "./timelineGenerator.js";
import { Wizard } from "./wizard.js";
import { bobblesGenerator } from "./bobblesGenerator.js";
// position the bobble BG
bobblesGenerator(".Slide");
// gallery animation
$(".gallery").each(function () {
    const tl = new timelineGenerator({ gallery: this });
    const galleryWizard = new Wizard({
        triggerElement: this,
        triggerHook: 0,
        duration: 5,
    });
    galleryWizard.setTween(tl);
    galleryWizard.setPin(this);
    galleryWizard.save();
    // update scroll bar size
    $("html").getNiceScroll().resize();
});
// set default theme color then remove it
changeColor({ toColor: "#272C2D" });
// colors.shift();
timelineGenerator.end();
