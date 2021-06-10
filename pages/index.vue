<template lang="pug">
    client-only(placeholder="Loading...")
        v-container(fluid).pa-0
            appBar
            .Slide hello
            gallery(type='art' heading='art photography' color='#325f91' imgsCount=9 cols=3)
            gallery(type='architectural' imgsCount=9 cols=3)
            gallery(type='product' imgsCount=9 cols=3)
            .tags
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
<style lang="sass"></style>
