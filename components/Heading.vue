<template lang="pug">
    .Slide 
        splitter.heading.text-h1(text='satisfing' capitalize='true')
        svg(width=536 height=97)
            clipPath#textClip
                text(y="88" v-for='text in texts' v-text='text' :key='text')
            include ../static/svg/blobText
        script(src='./js/blobAnimator.js')
</template>

<script>
import splitter from "./splitter";
export default {
    data: () => ({
        texts: ["home", "art", "architectural", "product", "contact us"],
    }),
    components: { splitter },
};
</script>
<style lang="sass" scoped>
@import "@/assets/style/blob"
</style>
