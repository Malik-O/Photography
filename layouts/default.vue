<template lang="pug">
    v-app(dark)
        //- inverse
        .inverses
        include ../static/svg/bobble.pug
        //- noise
        #noise
        Nuxt
        script(src='./js/general.js' type='module')
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "@/assets/style/layout"
</style>
