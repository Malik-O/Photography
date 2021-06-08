<template lang="pug">
    .mImg
        img(:src='src' width='100%')
</template>

<script>
export default {
    props: ["src"],
};
</script>

<style lang="sass" scoped>
.mImg
    width: 100%
</style>
