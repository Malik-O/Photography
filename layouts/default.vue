<template lang="pug">
    v-app(dark)
        //- bobbles
        include ../static/svg/bobble.pug
        //- noise
        #noise
        //- curser
        #outerCurser
        #curser
        //- doc
        Nuxt
        script(src='./js/general.js' type='module')
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "@/assets/style/layout"
</style>
