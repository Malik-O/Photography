<template lang="pug">
    v-container(fluid).pa-0
        appBar
        .Slide header
        gallery(type='art' imgsCount=9 cols=3)
        gallery(type='architectural' imgsCount=9 cols=3)
        gallery(type='product' imgsCount=9 cols=3)
</template>

<script>
import appBar from "@/components/appBar";
import gallery from "@/components/gallery";
export default {
    data: () => ({
        products: 9,
        cols: 3,
    }),
    components: { appBar, gallery },
};
</script>
<style lang="sass">
.Slide
    height: 100vh
    overflow: hidden
    &:nth-of-type(1):not(.gallery)
        background: red
    &:nth-of-type(3)
        background: blue
</style>
