<template lang="pug">
    .topbar.bg-white.topbar-shadow
        .wrapper
            nav.topbar-container.flex.items-center.justify-between
                nuxt-link.logo(to="/")
                    img.logo_img(src='~/assets/logo.svg')
                .menu
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style lang="scss">
    .topbar-container {
        height: 60px;
    }
    img.logo_img {
        height: 25px;
    }
</style>