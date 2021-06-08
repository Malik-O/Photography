class Wizard {
    constructor({ triggerElement, triggerHook, duration }) {
        this.triggerElement = triggerElement;
        this.triggerHook = triggerHook == undefined ? 0.5 : triggerHook;
        this.duration = duration ? ++duration : 2;
        //
        var lastScrollTop = 0;
        $(window).on("scroll", (e) => {
            // let direction = lastScrollTop > scrollY; // up: 1, down: 0
            // triggered status
            if (this.pinEle) {
                var Bounding = this.pinEle[0].getBoundingClientRect(),
                    start = Bounding.y / window.innerHeight - this.triggerHook,
                    end =
                        (Bounding.y + Bounding.height) / window.innerHeight -
                        this.triggerHook -
                        1;
                this.triggered = (start < 0) ^ (end < 0);
                // set the non trigger position with the classes
                this.pinEle.removeClass("curr-before curr-after");
                if (!start < 0 && !end < 0) this.pinEle.addClass("curr-before");
                else if (start < 0 && end < 0)
                    this.pinEle.addClass("curr-after");
                // manage triggered class
                if (this.triggered) this.pinEle.addClass("triggered");
                else this.pinEle.removeClass("triggered");
            }
            // activate the time line progress
            if (this.triggered) {
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
            // update the flag
            lastScrollTop = scrollY;
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
            // "padding-bottom": this.pinEle.height(),
        });
        console.log(window.innerHeight, this.duration, this.triggerHook);
    }
}
//
export { Wizard };
