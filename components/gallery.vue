<template lang="pug">
    v-row.Slide.product.ma-0
        v-col(v-for="c in cols * 1" :key="c" :cols="floor(12 / cols)")
            v-row(v-for="n in ceil(imgsCount / cols)" :key="n" width='100%')
                v-img(:src="genPecURL(n + (c - 1) * ceil(imgsCount / cols))" v-if="ceil(imgsCount / cols) < imgsCount")
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
    // width: 33%
    padding: 0
    .row
        width: 100%
        padding: 10%
        margin: 0
</style>
