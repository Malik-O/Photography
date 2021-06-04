<template lang="pug">
    v-app-bar.pt-6(app flat color='transparent')
        v-container
            v-row(justify='space-between' aling='center')
                .logo Logo
                v-spacer
                .menuIcon.float-right.curser_pointer_active
                    include ../static/svg/menu.pug
</template>

<script>
export default {};
</script>
<style lang="sass" scoped></style>
