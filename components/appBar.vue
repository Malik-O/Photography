<template lang="pug">
    v-app-bar.pt-6(app flat color='transparent')
        v-container
            v-row(aling='center')
                v-col(cols=1 align-self="center").logo.curser-pointer.pa-0
                        include ../static/svg/logo
                v-col.menu.pa-0(align-self="center")
                    ul.float-right.pl-0.pr-6
                        li(v-for='title in titles')
                            splitter.curser-pointer(:text='title' :capitalize='true' style='color: white')
                v-col(cols=1 align-self="center").menuIcon.pa-0
                    include ../static/svg/menuIcon
        //- 
        .menuBlur
        script(src='./js/appBar.js' type='module')
</template>

<script>
import splitter from "@/components/splitter";
export default {
    data: () => ({
        titles: ["home", "art", "architectural", "product", "contact me"],
    }),
    components: { splitter },
};
</script>
<style lang="sass" scoped>
@import "@/assets/style/appBar"
</style>
