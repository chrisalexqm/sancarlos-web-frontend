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