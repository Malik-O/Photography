<template lang="pug">
    v-app-bar.pt-6(app flat color='transparent')
        v-container
            v-row(justify='space-between' aling='center')
                .logo Logo
                .menuIcon.float-right
                    include ../static/svg/menu.pug
        //- 
        .menu
            .blur
        script(src='./js/appBar.js' type='module')
</template>

<script>
export default {};
</script>
<style lang="sass" scoped>
.menuIcon
    cursor: pointer
.menu
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0
    .blur
        width: 100%
        height: 100%
        backdrop-filter: blur(10px)
        z-index: 20
</style>
