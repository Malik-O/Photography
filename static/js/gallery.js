// Dependencies
import { timelineGenerate } from "./timelineGenerate.js";
import { Wizard } from "./wizard.js";
import { tagsPositioner } from "./tagsPositioner.js";
// position the tags
tagsPositioner($(".Slide"));
// gallery animation
$(".gallery").each(function () {
    const tl = timelineGenerate({ gallery: this });
    const galleryWizard = new Wizard({
        triggerElement: this,
        triggerHook: 0,
        duration: 5,
    });
    galleryWizard.setTween(tl);
    galleryWizard.setPin(this);
});
