<template lang="pug">
    client-only(placeholder="Loading...")
        v-container(fluid).pa-0
            appBar
            Heading
            gallery(v-for='attr in attrs' :key='attr.type' :attr='attr')
            .tags
            script(src='./js/curser.js' type='module')
</template>

<script>
import Heading from "@/components/Heading";
import appBar from "@/components/appBar";
import gallery from "@/components/gallery";
import splitter from "@/components/splitter";
export default {
    data: () => ({
        attrs: [
            {
                type: "art",
                imgsCount: 9,
                cols: 3,
                text: "#95546e",
                background: "#0e1d30",
            },
            {
                type: "architectural",
                imgsCount: 9,
                cols: 3,
                text: "#cc642d",
                background: "#261014",
            },
            {
                type: "product",
                imgsCount: 9,
                cols: 3,
                text: "#0e1d2e",
                background: "#985713",
            },
        ],
    }),
    components: { Heading, appBar, gallery, splitter },
};
</script>
<style lang="sass"></style>
