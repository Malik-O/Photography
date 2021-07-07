// vars
let allWizards = [];
// Class
class Wizard {
    constructor({ triggerElement, triggerHook, duration }) {
        this.triggerElement = $(triggerElement);
        this.triggerHook = triggerHook == undefined ? 0.5 : triggerHook;
        this.duration = duration ? ++duration : 2;
        this.active = true;
        // on scroll event
        $(window).on("scroll", () => {
            // triggered status
            const boundingElement = $(
                this.pinEle ? this.pinEle : this.triggerElement
            )[0];
            const Bounding = boundingElement.getBoundingClientRect(),
                start = Bounding.y / window.innerHeight - this.triggerHook,
                end =
                    (Bounding.y + Bounding.height) / window.innerHeight -
                    this.triggerHook -
                    1;
            // if (this.pinEle) {
            const upEle = this.pinEle || this.triggerElement;
            this.triggered = (start < 0) ^ (end < 0);
            // set the non trigger position with the classes
            upEle.removeClass("curr-before curr-after");
            if (!(start < 0 || end < 0)) {
                upEle.addClass("curr-before");
                this.tl.totalProgress(0);
            } else if (start < 0 && end < 0) {
                upEle.addClass("curr-after");
                this.tl.totalProgress(1);
            }
            // manage triggered class
            if (this.triggered) upEle.addClass("triggered");
            else upEle.removeClass("triggered");
            // activate the time line progress
            if (this.triggered && this.active) {
                this.tl.totalProgress(
                    1 -
                        ((Bounding.y + Bounding.height) / window.innerHeight -
                            this.triggerHook -
                            1) /
                            (Bounding.height / window.innerHeight - 1)
                );
            }
            // pined element position when triggered
            if (this.pinEle) {
                if (this.triggered)
                    this.pinEle.children().css({
                        top: this.triggerHook * 100 + "vh",
                    });
                else
                    this.pinEle.children().css({
                        top: "",
                    });
            }
        });
    }
    setTween(tl) {
        this.tl = tl;
        // scale the timeline depending on the duration
        this.duration ? tl.timeScale(1 / this.duration) : 0;
    }
    setPin(pinEle) {
        // wrap the element
        $(pinEle).wrap("<div class='pin-spacer'></div>");
        this.pinEle = $(pinEle).parent();
        this.pinEle.css({
            height:
                window.innerHeight * (this.duration - (this.triggerHook + 1)),
        });
    }
    save() {
        allWizards.push(this);
    }
    static getAll() {
        return allWizards;
    }
}
//
export { Wizard };
