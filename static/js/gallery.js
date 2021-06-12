// Dependencies
import { timelineGenerator } from "./timelineGenerator.js";
import { Wizard } from "./wizard.js";
import { bobblesPosition } from "./bobblesPosition.js";
// position the tags
bobblesPosition(".Slide");
// gallery animation
$(".gallery").each(function () {
    const tl = timelineGenerator({ gallery: this });
    const galleryWizard = new Wizard({
        triggerElement: this,
        triggerHook: 0,
        duration: 5,
    });
    galleryWizard.setTween(tl);
    galleryWizard.setPin(this);
});
