<template lang="pug">
    client-only
        v-row.Slide.gallery.product.ma-0
            v-col(v-for="c in cols * 1" :key="c" :cols="floor(12 / cols)")
                v-row(v-for="n in ceil(imgsCount / cols)" :key="n")
                    v-img(
                        :src="genPecURL(n + (c - 1) * ceil(imgsCount / cols))"
                        lazy-src="https://picsum.photos/id/11/100/60"
                        v-if="ceil(imgsCount / cols) < imgsCount")
            script(src='./js/gallery.js' type='module')
</template>

<script>
export default {
    props: ["type", "imgsCount", "cols"],
    methods: {
        genPecURL: function (n) {
            return `imgs/${this.type}/${n}.jpg`;
        },
        ceil: (n) => Math.ceil(n),
        floor: (n) => Math.floor(n),
    },
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
//
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
// .indicators-start, .indicators-end
//     width: 50px
//     height: 2px
//     background: white
//     position: absolute
//     top: 50vh
//     right: 0
// .indicators-end
//     background: gray
</style>
