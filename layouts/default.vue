<template lang="pug">
    div.default.mb-12.sm_mb-0
        div.content
            header-main
            nuxt
        footer-main
        bottom-navigation
</template>
<script>
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import BottomNavigation from '../components/shared/BottomNavigation'
export default {
    components: {
        HeaderMain,
        FooterMain,
        BottomNavigation
    }
}
</script>
<style lang="scss">
    .default {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content {
        flex: 1 0 auto;
    }
    .footer {
        flex-shrink: 0;
    }
</style>