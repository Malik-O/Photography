// Dependencies
import { timelineGenerator } from "./timelineGenerator.js";
import { Wizard } from "./wizard.js";
//
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
// tags
$(".Slide").each(function () {
    $(".tags").append(
        $('<div class="tag"/>').css(
            "top",
            `${(this.offsetTop / $("body").innerHeight()) * 100}vh`
        )
    );
});
