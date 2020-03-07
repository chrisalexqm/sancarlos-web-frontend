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
<style lang="scss">
    .btn {
        text-align: center;
        border-radius: 12px;
        user-select: none;
        cursor: pointer;
        color: #FFF;
        transition: .3s ease-out;
        border: none;
    }

    /* Colors */
    .btn--green {
        background: $green;
    }
    .btn--blue {
        background: $blue;
    }
    .btn--orange {
        background: $orange;
    }

    /* Sizes */
    .btn--sm {
        font-size: 12px;
        padding: 5px 10px;
    }
    .btn--md {
        font-size: 14px;
        padding: 8px 16px;
    }
    .btn--lg {
        font-size: 16px;
        padding: 10px 15px;
    }
    .btn--xl {
        font-size: 18px;
        padding: 15px 20px;
    }

    /* Rounded */
    .btn--rounded {
        border-radius: 100%;
    }
</style>