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
            ul
                li(v-for='title in titles')
                    splitter.heading.text-h3(:text='title' :capitalize='true')

        script(src='./js/appBar.js' type='module')
</template>

<script>
import splitter from "@/components/splitter";
export default {
    data: () => ({ titles: ["home", "art", "architectural", "product"] }),
    components: { splitter },
};
</script>
<style lang="sass" scoped>
@import "@/assets/style/appBar"
</style>
