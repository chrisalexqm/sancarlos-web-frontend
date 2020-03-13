<template lang="pug">
    .topbar.bg-white.topbar-shadow
        .wrapper
            nav.topbar-container.flex.items-center.justify-between
                nuxt-link.logo(to="/")
                    img.logo_img(src='~/assets/logo.svg')
                .menu.hidden.sm_block
                    ul.flex.text-sm.font-medium.text-black-blue
                        li.px-3
                            nuxt-link(to="/nosotros") Nosotros
                        li.px-3
                            nuxt-link(to="/cursos") Cursos
                        li.px-3
                            nuxt-link(to="/sedes") Sedes
                        li.px-3
                            nuxt-link(to="/testimonios") Testimonios
                        li.px-3
                            nuxt-link(to="/noticias") Noticias
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