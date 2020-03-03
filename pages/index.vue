<template lang="pug">
  .main
    .wrapper
        section.welcome-section.flex.flex-col.justify-center.rounded-3.regular-shadow.mt-4
            .welcome-section__content.flex.flex-col.justify-between.h-full.sm_h-auto.self-center.py-4.sm_py-0.sm_self-end.sm_mr-4.z-10
                p.welcome-section__title.text-center.sm_text-right.text-2xl.sm_text-4xl.font-bold.text-white.leading-none.whitespace-pre
                    | Educación sin límites
                    | con San Carlos
                .welcome-section__buttons.flex.flex-col.justify-between.items-center.sm_items-end.mt-2
                    sc-button.mb-2(size='lg' @click="$router.push('/cursos/auxiliar-educacion-inicial')") Auxiliar de educación inicial
                    sc-button(size='lg' color='orange' @click="$router.push('/cursos/estimulacion-temprana')") Estimulación temprana
            .color-overlay
        section.form-section.mt-8
            p.form-section__title.text-center.text-3xl.font-bold.text-black-blue.mb-8
                | ¡Conozcámonos un poco más!
            .form-section__body.bg-white.rounded-3.regular-shadow.px-4.py-2
                p.text-sm.text-black-blue Déjanos tus datos y nos pondremos en contacto contigo
                .flex.mt-4
                    .form-input.w-full.mr-2
                        label.block.text-gray-700.text-xs.mb-1
                        | Nombres *
                        input.bg-body.text-xs.font-normal.text-black-light.rounded-2.w-full.py-2.px-3.leading-tight(type='text', placeholder='Nombres')
                    .form-input.w-full
                        label.block.text-gray-700.text-xs.mb-1
                        | Apellidos *
                        input.bg-body.text-xs.font-normal.text-black-light.rounded-2.w-full.py-2.px-3.leading-tight(type='text', placeholder='Apellidos')
                .flex.mt-4
                    .form-input.w-full.mr-2
                        label.block.text-gray-700.text-xs.mb-1
                        | DNI *
                        input.bg-body.text-xs.font-normal.text-black-light.rounded-2.w-full.py-2.px-3.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='DNI')
                    .form-input.w-full
                        label.block.text-gray-700.text-xs.mb-1
                        | Provincia *
                        input.bg-body.text-xs.font-normal.text-black-light.rounded-2.w-full.py-2.px-3.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Provincia')
                .flex.mt-4
                    .form-input.w-full.mr-2
                        label.block.text-gray-700.text-xs.mb-1
                        | Teléfono *
                        input.bg-body.text-xs.font-normal.text-black-light.rounded-2.w-full.py-2.px-3.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Teléfono')
                    .form-input.w-full
                        label.block.text-gray-700.text-xs.mb-1
                        | Correo electrónico *
                        input.bg-body.text-xs.font-normal.text-black-light.rounded-2.w-full.py-2.px-3.leading-tight(class='focus_outline-none focus_shadow-outline', type='text', placeholder='Correo electrónico')
                .flex.justify-center.mt-6.mb-2
                    sc-button Enviar
</template>

<script>
import colors from '~/mixins/colors'

export default {
    mixins: [colors],
    data () {
        return {
            form: {
                fullname: '',
                surname: '',
                dni: '',
                address: '',
                phone: '',
                email: ''
            }
        }
    },
    head () {
        return {
            title: 'Educación sin límites | San Carlos Educa',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Asesoría Educativa San Carlos es una entidad que desarrolla programas de especialización en todas las áreas académicas y con especial énfasis en cursos de Educación Inicial y Desarrollo Infantil Temprano.'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .welcome-section {
        background: url('../assets/portada-bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 400px;
        position: relative;
        display: flex;
        overflow: hidden;
    }
    .welcome-section__title {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
    }
    .welcome-section__button {
        width: 180px;
    }
    .color-overlay {
        width: 100%;
        height: 100%;
        background: linear-gradient(360deg, #2C3E50 0%, rgba(44, 62, 80, 0) 50%, #2C3E50 100%);
        opacity: .6;
        top: 0;
        left: 0;
        position: absolute;
        @media (min-width: 640px) {
            background: linear-gradient(90deg, rgba(44, 62, 80, 0) 34.9%, #2C3E50 79.69%);
        }
    }
</style>
