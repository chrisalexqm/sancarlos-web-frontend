<template lang="pug">
  .main
    .topbar.bg-white.topbar-shadow
        .wrapper
            nav.topbar-container.flex.items-center.justify-between
                nuxt-link.logo(to="/")
                    img.logo_img(src='~/assets/logo.svg')
                .menu
    .wrapper.course-grid.mt-4
        section.first-content
            .course-basic-information.bg-white.rounded-3.regular-shadow
                .course-img
                    img.object-cover(src='~/assets/auxiliar_educacion_inicial.jpg')
                .course-description.py-2.px-4
                    .course-title.text-2xl.font-bold.text-black-blue.mb-2
                        | Auxiliar en educación inicial
                    .course-text
                        p.text-sm.font-regular.text-black-blue
                            | Aprenderas a formar personas proactivas y creativas
                            | especializadas en el cuidado y atención integral a
                            | estudiantes de 0 a 5 años. Para ello, se les brindará
                            | estrategias que desarrollen sus competencias, capacidades
                            | y habilidades para su buen desempeño.
        section.second-content
            .course-more-information.bg-white.rounded-3.regular-shadow
                .information-tabs.px-4.flex.items-center.text-sm.font-regular.text-black-blue.card-title-shadow
                    .tab.cursor-pointer(@click="tab = 1" :class="{ 'text-blue': tab === 1 }")
                        span.mx-2 Funciones
                        .active-bar.bg-blue(v-show="tab === 1")
                    .tab.cursor-pointer(@click="tab = 2" :class="{ 'text-blue': tab === 2 }")
                        span.mx-2 Temario
                        .active-bar.bg-blue(v-show="tab === 2")
                .information-content.py-2.px-4
                    .content_one(v-show="tab === 1")
                        ul.content-list.text-sm.font-regular.text-black-blue
                            li Participar en actividades formativas, disciplinarias, de bienestar del estudiante.
                            li Conocer a los estudiantes y sus necesidades básicas.
                            li Realizar el control y seguimiento de las actividades programadas.
                            li Procurar que el niño se integre y adapte socialmente.
                            li Crear un ambiente de cariño, conﬁanza, paciencia y estimulante.
                            li Procurar relaciones con otros niños que le capaciten para la cooperación y el compañerismo reforzando positivamente sus logros.
                            li Reconducir la relación con sus padres en caso de sobreprotección o rechazo al hijo.
                            li Asesorar a los padres en las tareas que le competen.
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
            title: 'Auxilar en educación inicial | San Carlos Educa',
            meta: [
                { hid: 'description', name: 'description', content: 'Formar personas proactivas y creativas especializadas en el cuidado y atención integral a estudiantes de 0 a 5 años.' }
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
    .course-grid {
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-gap: 20px;
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
    .first-content {
        grid-column: 1 / 3;
    }
    .second-content {
        grid-column: 1 / 3;
    }
    .side-bar {
        grid-column: 1 / 3;
        grid-row: 2;
        width: 100%;
    }
    @media (min-width: 640px) {
        .first-content {
            grid-column: 1;
        }
        .second-content {
            grid-column: 1;
        }
        .side-bar {
            grid-column: 2;
            grid-row: 1;
        }
    }
    .footer {
        height: 60px;
    }
</style>
