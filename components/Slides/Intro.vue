<template lang="pug">
    .Intro.Slide
        .text
            splitter.heading.text-h4.d-block(text='hi' capitalize='true')
            splitter.heading.text-h1.d-inline(text="I'm mikle" capitalize='true')
            splitter.heading.text-h4.d-block(text="and I'm " capitalize='true')
            splitter.heading.text-h1.d-inline(text='Photographer of ')
            svg(width=750 height=97 :data-content='types[0]').blobText.d-inline.curser-pointer.pl-6
                clipPath#textClip
                    text(y="90" v-for='text in types' :key='text').text-capitalize {{ text + '.' }}
                include ../../static/svg/blobText
        script(src='../js/blobAnimator.js' type='module')
        script(src='../js/navigation.js' type='module')
</template>

<script>
import splitter from "@/components/splitter";
export default {
    data: () => ({
        // texts: ["art", "architectural", "product"],
    }),
    props: ["types"],
    components: { splitter },
};
</script>
<style lang="sass" scoped>
@import "@/assets/style/Intro"
</style>
