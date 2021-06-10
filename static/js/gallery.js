// Dependencies
import { timelineGenerator } from "./timelineGenerator.js";
import { Wizard } from "./wizard.js";
import { tagsPositioner } from "./tagsPositioner.js";
// gallery animation
$(".gallery").each(function () {
    const tl = timelineGenerator($(this));
    const wizard = new Wizard({
        triggerElement: this,
        triggerHook: 0,
        duration: 5,
    });
    wizard.setTween(tl);
    wizard.setPin(this);
});
// position the tags
tagsPositioner($(".Slide"));
// inverse
import { inverse } from "./inverse.js";
// inverse("svg clipPath#bobble-2 path").play();
const wizard = new Wizard({
    triggerElement: "body",
    triggerHook: 0,
});
wizard.setTween(inverse());
