<template lang="pug">
    svg.icon(aria-hidden="true", :class="'icon--' + size")
        use(:xlink:href="iconName")
</template>
<script>
    export default {
        name: 'SvgIcon',
        props: {
            name: {
                type: String,
                required: true
            },
            size: {
                type: String,
                default: 'sm'
            }
        },
        computed: {
            iconName () {
                return `#icon-${this.name}`
            }
        }
    }
</script>
<style lang="scss">
    svg.icon {
        fill: currentColor;
    }
    .icon--xs {
        width: 10px;
        height: 10px;
    }
    .icon--sm {
        width: 15px;
        height: 15px;
    }
    .icon--md {
        width: 20px;
        height: 20px;
    }
    .icon--lg {
        width: 25px;
        height: 25px;
    }
</style>