<template lang="pug">
    nav.bottom-nav.bottom-nav-shadow.flex.sm_hidden
        ul.bottom-nav__list.px-4.py-2
            nuxt-link.bottom-nav__item(tag="li" to="/nosotros" exact)
                icon.item__icon(name="users" size="md")
                span.item__text.font-medium Nosotros
            nuxt-link.bottom-nav__item(tag="li" to="/cursos")
                icon.item__icon(name="books" size="md")
                span.item__text.font-medium Cursos
            nuxt-link.bottom-nav__item(tag="li" to="/sedes")
                icon.item__icon(name="school" size="md")
                span.item__text.font-medium Sedes
            nuxt-link.bottom-nav__item(tag="li" to="/testimonios")
                icon.item__icon(name="user-graduate" size="md")
                span.item__text.font-medium Testimonios
            nuxt-link.bottom-nav__item(tag="li" to="/noticias")
                icon.item__icon(name="news" size="md")
                span.item__text.font-medium Noticias
</template>
<script>
export default {
    name: 'BottomNavigation'
}
</script>
<style lang="scss">
    .bottom-nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: $white;
        justify-content: center;
    }
    .bottom-nav__list {
        display: flex;
        max-width: 420px;
        width: 100%;
        justify-content: space-between;
    }
    .bottom-nav__item {
        -webkit-tap-highlight-color: transparent;
        display: flex;
        font-size: 10px;
        padding: 10px 10px;
        align-items: center;
        border-radius: 20px;
        transition: all .5s;
        cursor: pointer;
        .item__icon {
            min-width: 20px;
            color: $black-blue;
        }
        .item__text {
            margin-left: 0;
            width: 100%;
            max-width: 0px;
            opacity: 0;
            overflow: hidden;
            transition: all .5s;
        }
        &.nuxt-link-active {
            padding: 10px 10px;
            transition: all .4s;
            .item__text {
                margin-left: 5px;
                max-width: 65px;
                opacity: 1;
                transition: all .4s;
            }
        }
    }
    .bottom-nav__item:nth-child(1) {
        .item__text {
            color: $green;
        }
        &.nuxt-link-active {
            .item__icon {
                color: $green;
            }
            background: rgba($green, .3);
        }
    }
    .bottom-nav__item:nth-child(2) {
        .item__text {
            color: $blue;
        }
        &.nuxt-link-active {
            .item__icon {
                color: $blue;
            }
            background: rgba($blue, .3);
        }
    }
    .bottom-nav__item:nth-child(3) {
        .item__text {
            color: $orange;
        }
        &.nuxt-link-active {
            .item__icon {
                color: $orange;
            }
            background: rgba($orange, .3);
        }
    }
    .bottom-nav__item:nth-child(4) {
        .item__text {
            color: $purple;
        }
        &.nuxt-link-active {
            .item__icon {
                color: $purple;
            }
            background: rgba($purple, .3);
        }
    }
    .bottom-nav__item:nth-child(5) {
        .item__text {
            color: $yellow;
        }
        &.nuxt-link-active {
            .item__icon {
                color: $yellow;
            }
            background: rgba($yellow, .3);
        }
    }
</style>