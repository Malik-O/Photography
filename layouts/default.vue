<template lang="pug">
    v-app(dark)
        //- inverse
        .inverses
        include ../static/svg/bobble.pug
        //- noise
        #noise
        //- curser
        #curser
        #outerCurser
        //- doc
        Nuxt
        script(src='./js/general.js' type='module')
        script(src='./js/curser.js' type='module')
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "@/assets/style/layout"
</style>
