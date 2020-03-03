<template lang="pug">
    button(@click="callback($event)")
        ripple.btn(:class="'btn--' + color + ' btn--' + size + (rounded ? ' btn--rounded' : '')")
            slot
</template>
<script>
import Ripple from '~/components/shared/Ripple.vue'

export default {
    name: 'SButton',
    components: {
        Ripple
    },
    props: {
        color: {
            type: String,
            default: 'green'
        },
        size: {
            type: String,
            default: 'md'
        },
        rounded: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        callback (e) {
            this.$emit('click', e)
        }
    }
}
</script>