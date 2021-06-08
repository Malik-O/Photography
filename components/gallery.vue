<template lang="pug">
    client-only
        v-row.Slide.gallery.product.ma-0
            splitter.heading.text-h1(:text='heading || type' :capitalize='true')
            v-col(v-for="c in cols * 1" :key="c" :cols="floor(12 / cols)")
                v-row(v-for="n in ceil(imgsCount / cols)" :key="n")
                    mImg(
                        :src="genPecURL(n + (c - 1) * ceil(imgsCount / cols))"
                        v-if="ceil(imgsCount / cols) < imgsCount")
            script(src='./js/gallery.js' type='module')
</template>

<script>
import splitter from "@/components/splitter";
import mImg from "@/components/mImg";
export default {
    props: ["type", "imgsCount", "cols", "heading"],
    components: { splitter, mImg },
    methods: {
        genPecURL: function (n) {
            return `imgs/${this.type}/${n}.jpg`;
        },
        ceil: (n) => Math.ceil(n),
        floor: (n) => Math.floor(n),
    },
};
</script>
<style lang="sass" scoped>
.row
    position: relative
    .heading
        color: #fff
        mix-blend-mode: difference
        opacity: .8
        z-index: 1
        position: absolute
    > .col
        position: relative
        padding: 0
        .row
            width: 100%
            padding: 10%
            margin: 0
.pin-spacer
    position: relative
    &.curr-before > *
        position: absolute
        top: 0
    &.curr-after > *
        position: absolute
        bottom: 0
    &.triggered
        > *
            position: fixed
</style>
