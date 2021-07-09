// Dependencies
import { changeColor } from "./changeColor.js";
import { timelineGenerator } from "./timelineGenerator.js";
import { contactTimeline } from "./contactTimeline.js";
import { Wizard } from "./wizard.js";
import { bobblesGenerator } from "./bobblesGenerator.js";
// position the bobble BG
bobblesGenerator(".Slide");
// gallery animation
$(".gallery, .ContactMe").each(function () {
    const tl = $(this).hasClass("gallery")
        ? new timelineGenerator({ gallery: this })
        : contactTimeline();
    const slideWizard = new Wizard({
        triggerElement: this,
        triggerHook: 0,
        duration: 5,
    });
    slideWizard.setTween(tl);
    slideWizard.setPin(this);
    slideWizard.save();
});
// update scroll bar size
$("html").getNiceScroll().resize();
//
// $(".ContactMe").each(function () {});
// set default theme color then remove it
changeColor({ toColor: "#272C2D" });
// colors.shift();
timelineGenerator.end();
