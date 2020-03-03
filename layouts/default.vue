<template lang="pug">
    div
        header-main
        nuxt
        footer-main
</template>
<script>
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
export default {
    components: {
        HeaderMain,
        FooterMain
    }
}
</script>