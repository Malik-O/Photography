<template lang="pug">
    .splitter
        span.word(v-for="word in text.split(' ').map((text, index) => text)")
            span(v-if="text.split(' ').indexOf(word)") &nbsp;
            span.char(v-for="(char, i) in word") {{!i && capitalize ? char.toUpperCase() : char}}
        script(src='./js/headingAnimator.js')
</template>

<script>
export default {
    data: () => ({
        firstChar: 0,
    }),
    props: ["text", "shuffle", "duration", "capitalize"], // char, word, line
};
</script>

<style scoped lang="sass">
.splitter
    text-align: center
    cursor: default
    letter-spacing: .8rem !important
    *
        font-family: $primary_font_family
.word, .char
    display: inline-block
</style>
