<template lang="pug">
    client-only(placeholder="Loading...")
        v-container(fluid).pa-0
            appBar
            Intro(:types='types')
            gallery(v-for='attr in attrs' :key='attr.type' :class='attr.type' :attr='attr')
            //- ContactMe
            .tags
            script(src='./js/curser.js' type='module')
            script(src='./js/headingAnimator.js')
</template>

<script>
import appBar from "@/components/appBar";
import splitter from "@/components/splitter";
import Intro from "@/components/Slides/Intro";
import gallery from "@/components/Slides/gallery";
import ContactMe from "@/components/Slides/ContactMe";
export default {
    data: () => {
        const attrs = [
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
            types = attrs.map((x) => x.type);

        return {
            attrs,
            types,
        };
    },
    components: { Intro, appBar, gallery, splitter, ContactMe },
};
</script>
<style lang="sass"></style>
