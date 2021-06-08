<template lang="pug">
    v-container(fluid).pa-0
        appBar
        .Slide hello
        gallery(type='art' heading='art photography' imgsCount=9 cols=3)
        gallery(type='architectural' imgsCount=9 cols=3)
        gallery(type='product' imgsCount=9 cols=3)
        .tags
        script(src='./js/general.js' type='module')
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
#ascrail2000
    padding-right: 5px
    z-index: 100 !important
.Slide
    height: 100vh
    overflow: hidden
.tags
    .tag
        width: 20px
        height: 2px
        border-radius: 5px
        background: red
        position: fixed
        top: 0
        right: 5px
</style>
