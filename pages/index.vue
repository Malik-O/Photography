<template lang="pug">
    client-only(placeholder="Loading...")
        v-container(fluid).pa-0
            appBar
            .Slide 
                splitter.heading.text-h1(text='satisfing websit' :capitalize='true' style=`color: ${color} !important`)
            gallery(type='art' heading='art photography' color='#325f91' imgsCount=9 cols=3)
            gallery(type='architectural' imgsCount=9 cols=3)
            gallery(type='product' imgsCount=9 cols=3)
            .tags
            script(src='./js/curser.js' type='module')
</template>

<script>
import appBar from "@/components/appBar";
import gallery from "@/components/gallery";
import splitter from "@/components/splitter";
export default {
    data: () => ({
        products: 9,
        cols: 3,
    }),
    components: { appBar, gallery, splitter },
};
</script>
<style lang="sass"></style>
