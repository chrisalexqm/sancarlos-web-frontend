<template lang="pug">
  .main
    .wrapper
      nav.topbar.flex.items-center.justify-between.bg-white
        .logo
          img.logo_img(src='~/assets/logo.svg')
        .menu
    section.welcome-section.flex.flex-col.justify-between
      p.welcome-section__title.text-center.text-5xl.font-bold.text-white.leading-none.cover-page-shadow.whitespace-pre.mt-12.z-10
        | EDUCACIÓN SIN LÍMITES
        | CON SAN CARLOS
      .welcome-section_buttons.flex.flex-col.items-center.z-10
        .top-buttons.flex.flex-row.mb-6
          .button-one.bg-green.px-4.py-2.rounded-full.text-center.text-xl.font-medium.text-white.leading-none.mr-4
            | Estimulación temprana
          .button-one.bg-orange.px-4.py-2.rounded-full.text-center.text-xl.font-medium.text-white.leading-none
            | Auxiliar de educación inicial
        .bottom-buttons.flex.flex-col.items-center
          p.button-text.font-medium.text-white
            | ¿Quieres más información?
          img(src="~assets/images/angle-down-solid.svg").w-4.text-white.mb-4
      .color-overlay
    section.form-section.mt-8.mb-6
      .wrapper
        p.form-section__title.text-center.text-3xl.font-bold.text-black.mb-8
          | ¡Conozcámonos un poco más!
        .form-section__body.bg-white.shadow-md.px-4.py-4
          p Déjanos tus datos y nos pondremos en contacto contigo
          .flex.mt-4
            .form-input.w-full.mr-6
              label.block.text-gray-700.text-sm.font-bold.mb-2
                | Nombres *
              input.shadow.appearance-none.border-gray-300.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Nombres')
            .form-input.w-full
              label.block.text-gray-700.text-sm.font-bold.mb-2
                | Apellidos *
              input.shadow.appearance-none.border-gray-300.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Apellidos')
          .flex.mt-4
            .form-input.w-full.mr-6
              label.block.text-gray-700.text-sm.font-bold.mb-2
                | DNI *
              input.shadow.appearance-none.border-gray-300.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='DNI')
            .form-input.w-full
              label.block.text-gray-700.text-sm.font-bold.mb-2
                | Provincia *
              input.shadow.appearance-none.border-gray-300.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Provincia')
          .flex.mt-4
            .form-input.w-full.mr-6
              label.block.text-gray-700.text-sm.font-bold.mb-2
                | Teléfono *
              input.shadow.appearance-none.border-gray-300.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Teléfono')
            .form-input.w-full
              label.block.text-gray-700.text-sm.font-bold.mb-2
                | Correo electrónico *
              input.shadow.appearance-none.border-gray-300.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Correo electrónico')
      </button>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      key: 'value'
    }
  }
}
</script>

<style lang="scss">
  nav.topbar{
    height: 60px;
  }
  img.logo_img {
    height: 25px;
  }
  .welcome-section{
    background: url('../assets/portada.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 650px;
    position: relative;
    display: flex;
  }
  .color-overlay {
    width: 100%;
    height: 100%;
    background: black;
    opacity: .5;
    top: 0;
    left: 0;
    position: absolute;
  }
  .button-one, .button-two {
    width: 240px;
  }
</style>
