<template lang="pug">
  .main
    .topbar.bg-white.topbar-shadow
        .wrapper
            nav.topbar-container.flex.items-center.justify-between
                nuxt-link.logo(to="/")
                    img.logo_img(src='~/assets/logo.svg')
                .menu
    .wrapper.flex.mt-4
        section.main-content.mr-4
            .course-basic-information.bg-white.rounded-3.regular-shadow
                .course-img
                    img.object-cover(src='~/assets/estimulacion_temprana.jpg')
                .course-description.py-2.px-4
                    .course-title.text-2xl.font-bold.text-black-blue.mb-2
                        | Estimulación temprana
                    .course-text
                        p.text-sm.font-regular.text-black-blue
                            | Aprenderas a capacitar a los participantes en técnicas y estrategias
                            | con los fundamentos cientíﬁcos de la estimulación temprana y el
                            | aporte de cada una de las disciplinas en el conocimiento del niño
                            | de 0 a 3 años, de una manera dinámica y práctica, con el ﬁn de estimular
                            | el desarrollo de los niños. Además, se brindará orientación y recomendaciones
                            | a las personas que quieran emprender un centro de estimulación temprana.
            .course-more-information.bg-white.rounded-3.regular-shadow.mt-4
                .information-tabs.px-4.flex.items-center.text-sm.font-regular.text-black-blue.card-title-shadow
                    .tab.cursor-pointer(@click="tab = 1" :class="{ 'text-blue': tab === 1 }")
                        span.mx-2 Temario
                        .active-bar.bg-blue(v-show="tab === 1")
                    //- .tab.cursor-pointer(@click="tab = 2" :class="{ 'text-blue': tab === 2 }")
                    //-     span.mx-2 Temario
                    //-     .active-bar.bg-blue(v-show="tab === 2")
                .information-content.py-2.px-4
                    .content_one(v-show="tab === 1")
                        ul.content-list.text-sm.font-regular.text-black-blue
                            li
                                | Estimulación temprana, estrategias y áreas que comprenden en el proceso de desarrollo del niño.
                            li
                                | Embarazo, inﬂuencia y desarrollo del neonato: etapas y evaluación del niño desde la concepción.
                            li Estrategia de cuidado del neonato y sesiones modelos.
                            li
                                | Organización, distribución de un aula de cuna y elaboración
                                | de carpeta pedagógica. Inteligencias múltiples aplicadas a la estimulación temprana.
                            li Estrategias y elaboración de material para la estimulación de lenguaje.
                            li Estimulación cognitiva (iniciación a las matemáticas).
                            li Ambientación de aula de cuna.
                            li
                                | Elaboración de instrumentos y cancionero para la aplicación de musicoterapia para bebés en cuna.
                            li Estrategias de masajes en el neonato y estimulación.
                            li Motriz en cuna.
                            li Elaboración de materiales de cuna.
                            li Técnicas y estrategias para la enseñanza de las artes plásticas.
                            li Salud y nutrición infantil.
                            li Prácticas profesionales en cuna.
                            li Aplicación del Test de Pickler.
                    .content_two(v-show="tab === 2")
                        ul.content-list.text-sm.font-regular.text-black-blue
                            li Introducción a la pedagogía.
                            li Desarrollo y psicología infantil.
                            li Enfoque del nivel inicial.
                            li Cuidados y el rol del adulto en el aprendizaje de los niños.
                            li Interacciones efectivas y juegos como estrategia para el aprendizaje.
                            li Materiales didácticos y ambientación de aula.
                            li Dramatización y títeres.
                            li Juegos y canciones para psicomotricidad.
                            li Literatura infantil.
                            li Técnicas de expresión gráﬁco-plástico.
                            li Introducción a la educación inclusiva.
                            li Estrategias para el cuidado de niños con necesidades educativas especiales.
        section.side-bar
            .course-details.bg-white.rounded-3.regular-shadow
                .course-details__title.px-4.flex.items-center.text-lg.font-medium.text-black-blue.card-title-shadow
                    | Detalles del curso
                .course-details__body.py-2.px-4
                    ul.details.text-black-blue.text-xs.font-medium
                        li.flex.mb-2
                            .icon.w-3.h-3
                                img.w-full.h-full(src='~/assets/images/map-marker-alt-solid.svg')
                            span.ml-1
                                | Bagua Grande, Chachapoyas, Huaraz y Lima
                        li.flex.mb-2
                            .icon.w-3.h-3
                                img.w-full.h-full(src='~/assets/images/calendar-alt-regular.svg')
                            span.ml-1
                                | Sábado (12 meses)
                        li.flex
                            .icon.w-3.h-3
                                img.w-full.h-full(src='~/assets/images/clock-regular.svg')
                            span.ml-1
                                | 09:00 am - 01:00 pm
                    .separator.bg-body.my-2
                    ul.details.text-black-blue.text-xs.font-medium
                        li.flex.mb-2
                            .icon.w-3.h-3
                                img.w-full.h-full(src='~/assets/images/map-marker-alt-solid.svg')
                            span.ml-1
                                | Juanjuí, Moyobamba, Tarapoto y Yurimaguas
                        li.flex.mb-2
                            .icon.w-3.h-3
                                img.w-full.h-full(src='~/assets/images/calendar-alt-regular.svg')
                            span.ml-1
                                | Sábado (12 meses)
                        li.flex
                            .icon.w-3.h-3
                                img.w-full.h-full(src='~/assets/images/clock-regular.svg')
                            span.ml-1
                                | 08:00 am - 12:00 pm
    section.footer.flex.justify-center.items-center
      span.text-xs.text-gray-700 ©2019 Asesoria Educativa San Carlos.
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
            },
            tab: 1
        }
    },
    head () {
        return {
            title: 'Estimulación temprana | San Carlos Educa',
            meta: [
                { hid: 'description', name: 'description', content: 'La estimulación temprana comprende aquellas actividades de contacto o juego con un bebé que propicien y desarrollen adecuadamente sus potenciales.' }
            ]
        }
    }
}
</script>

<style lang="scss">
    .topbar-container {
        height: 60px;
    }
    img.logo_img {
        height: 25px;
    }
    .course-basic-information {
        overflow: hidden;
    }
    .course-more-information {
        overflow: hidden;
    }
    .course-img img{
        height: 300px;
        width: 100%;
    }
    .content-list {
        list-style-type: disc;
        li {
            margin-left: 25px;
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .information-tabs {
        height: 40px;
    }
    .course-details {
        overflow: hidden;
    }
    .course-details__title {
        height: 40px;
    }
    .active-bar {
        height: 2px;
        box-shadow: 0px 0px 8px rgba(15, 175, 237, 0.4);
    }
    .separator {
        height: 2px;
        box-shadow: 0px 0px 8px #F4F5F9;
    }
    .side-bar {
        width: 100%;
        min-width: 300px;
    }
    .footer {
        height: 60px;
    }
</style>
