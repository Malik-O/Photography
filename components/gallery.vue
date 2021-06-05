<template lang="pug">
    v-row.Slide.gallery.product.ma-0
        v-col(v-for="c in cols * 1" :key="c" :cols="floor(12 / cols)")
            v-row(v-for="n in ceil(imgsCount / cols)" :key="n")
                v-img(
                    :src="genPecURL(n + (c - 1) * ceil(imgsCount / cols))"
                    lazy-src="https://picsum.photos/id/11/100/60"
                    v-if="ceil(imgsCount / cols) < imgsCount")
        v-btn.btn.btn-primary.play play
        v-btn.btn.btn-primary.reverse reverse
        script(src='./js/gallery.js' type='module')
</template>

<script>
import gsap from "gsap";
// require("imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min");
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
export default {
    props: ["type", "imgsCount", "cols"],
    methods: {
        genPecURL: function (n) {
            return `imgs/${this.type}/${n}.jpg`;
        },
        ceil: (n) => Math.ceil(n),
        floor: (n) => Math.floor(n),
    },
    // mounted() {
    //     // if (process.browser && window) {
    //     const tl = new gsap.timeline();
    //     tl.to(".gallery .col:nth-of-type(2)", {
    //         y: -300,
    //         duration: 1,
    //     });
    //     const controller = this.$scrollmagic.controller_,
    //         scene = this.$scrollmagic.scene({
    //             triggerElement: ".gallery",
    //             triggerHook: 0,
    //             duration: "300%",
    //         });
    //     console.log($(".gallery"));
    //     scene.setPin(".gallery");
    //     scene.setTween(tl);
    //     // scene.setClassToggle(".gallery", "show");
    //     scene.addIndicators();
    //     // this.$scrollmagic.addScene(scene);
    //     scene.addTo(controller);
    //     // }
    // },
};
</script>

<style lang="sass">
.col
    padding: 0
    .row
        width: 100%
        padding: 10%
        margin: 0
.btn
    position: absolute
    &:nth-of-type(1)
        top: 100vh
    &:nth-of-type(2)
        top: 105vh
</style>
