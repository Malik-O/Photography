<template lang="pug">
    client-only
        v-row.Slide.gallery.ma-0
            .heading
                splitter.text-h1.d-inline(:text='heading' :capitalize='true')
                splitter.text-h3.d-inline.pl-6(text=' photography' :capitalize='true')
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
    props: ["attr"],
    data() {
        this.attr.heading = this.attr.heading || this.attr.type;
        return this.attr;
    },
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
@import "@/assets/style/gallery"
</style>
