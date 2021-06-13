<template lang="pug">
    v-app-bar.pt-6(app flat color='transparent')
        v-container
            v-row(justify='space-between' aling='center')
                v-col(cols=2).logo.curser-pointer Logo
                v-col.menu
                    ul.float-right.pl-0.pr-6
                        li(v-for='title in titles')
                            splitter.curser-pointer(:text='title' :capitalize='true' style='color: white')
                v-col(cols=1).menuIcon.curser-pointer
                    include ../static/svg/menu.pug
        //- 
        .menuBlur
        script(src='./js/appBar.js' type='module')
</template>

<script>
import splitter from "@/components/splitter";
export default {
    data: () => ({
        titles: ["home", "art", "architectural", "product", "contact us"],
    }),
    components: { splitter },
};
</script>
<style lang="sass" scoped>
@import "@/assets/style/appBar"
</style>
