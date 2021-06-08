const genTL = (g) => {
    const tl = gsap.timeline({ paused: true });
    g.children(`.col`).each(function (i) {
        let col = $(this);
        tl.fromTo(
            col,
            {
                y: col.height() * (-1) ** !!(i % 2),
            },
            {
                y: col.height() * (-1) ** !(i % 2),
                duration: 1,
            },
            `-=${Number(!!i)}`
        );
    });
    return tl;
};
import { Wizard } from "./wizard.js";
$(".gallery").each(function (index) {
    console.log(index);
    const tl = genTL($(this));
    const wizard = new Wizard({
        triggerElement: this,
        triggerHook: 0,
        duration: 5,
    });
    wizard.setTween(tl);
    wizard.setPin(this);
});
