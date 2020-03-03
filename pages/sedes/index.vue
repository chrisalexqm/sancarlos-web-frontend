<template lang="pug">
    .main
        .wrapper.flex.flex-col.items-center
            h1.text-center.text-2xl.text-black-blue.font-bold.my-4 Encuentra nuestras sedes en todo el Perú
            .campus-map
                .map
                    img(src='~/assets/images/map-marker.png' v-for="(item, index) in campus" :class="'campus-' + (index + 1)" @click="selectCampus(index)").campus
            .campus-information.bg-white.rounded-3.regular-shadow.mt-4
                .no-campus-selected.py-4(v-if="selectedCampus === -1")
                    p.text-lg.font-bold.text-black-blue.flex.flex-col.items-center
                        icon.text-blue(name="map-marked" size="lg")
                        span Selecciona una sede en el mapa
                .campus-selected.flex(v-else)
                    .campus-img(:style="{ backgroundImage: 'url(' + getPic(campus[selectedCampus].image) + ')' }")
                    .campus-selected__details.text-black-blue.flex.flex-col.px-2.py-2
                        p.text-base.font-bold {{ campus[selectedCampus].name }}
                        p.text-xs.font-regular
                            span.font-bold Lugar:
                            |  {{ campus[selectedCampus].place }}
                        p.text-xs.font-regular
                            span.font-bold Dirección
                            |  {{ campus[selectedCampus].address }}
</template>
<script>
export default {
    data () {
        return {
            selectedCampus: -1,
            campus: [
                {
                    name: 'Sede Bagua',
                    place: 'Institución Educativa Alonso de Alvarado',
                    address: 'Jr. Hipólito Unanue 301, Bagua Grande',
                    image: 'Bagua_Grande.jpg'
                },
                {
                    name: 'Sede Chachapoyas',
                    place: 'Instituto de Educación Superior Pedagógico Público Toribio Rodríguez de Mendoza',
                    address: 'Jr. Triunfo 630, Chachapoyas',
                    image: 'Chachapoyas.jpg'
                },
                {
                    name: 'Sede Moyobamba',
                    place: 'Institución Educativa Germán Tejada Vela',
                    address: 'Plaza de Armas de Moyobamba',
                    image: 'Moyobamba.jpg'
                },
                {
                    name: 'Sede Tarapoto',
                    place: 'Colegio Aplicación - Instituto de Educación Superior Pedagógico Público Tarapoto',
                    address: 'Jr. Orellana S/N, cuadra 2, Tarapoto',
                    image: 'Tarapoto.jpg'
                },
                {
                    name: 'Sede Yurimaguas',
                    place: 'Institución Educativa 62009 Marcelina López Rojas',
                    address: ' Av. Libertad 523, Yurimaguas',
                    image: 'Yurimaguas.jpg'
                },
                {
                    name: 'Sede Juanjuí',
                    place: 'Instituto de Educación Superior Pedagógico Público Gran Pajatén',
                    address: 'Jr. Ricardo Palma 216, Barrio San Juan, Juanjuí',
                    image: 'Juanjui.jpg'
                },
                {
                    name: 'Sede Lima',
                    place: 'Universidad Nacional Mayor de San Marcos (2° piso de la Facultad de Ciencias Sociales)',
                    address: ' Calle Germán Amézaga 375 (puerta 3 de la Av. Universitaria), Cercado de Lima',
                    image: 'Lima.jpg'
                },
                {
                    name: 'Sede Huaraz',
                    place: 'Colegio La Libertad',
                    address: 'Av. Agustín Gamarra, Huaraz',
                    image: 'Huaraz.jpg'
                }
            ]
        }
    },
    head () {
        return {
            title: 'Sedes | San Carlos Educa',
            meta: [
                { hid: 'description', name: 'description', content: '¡Encuéntranos! Ubica nuestras sedes en todo el Perú' }
            ]
        }
    },
    methods: {
        selectCampus (index) {
            this.selectedCampus = index
        },
        getPic (image) {
            return require('../../assets/images/' + image)
        }
    }
}
</script>
<style lang="scss">
    $map-marker-width: 12px;
    $map-marker-height: ($map-marker-width / 2) * 3;
    $marker-top-fix: $map-marker-height / 2;
    $marker-left-fix: $map-marker-width / 2;
    @function topCalc($position) {
        @return calc(#{$position} - #{$map-marker-height});
    }
    @function leftCalc($position) {
        @return calc(#{$position} - #{$marker-left-fix});
    }
    .campus-map {
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: center;
    }
    .map {
        background-image: url('../../assets/images/mapa-peru.png');
        background-size: cover;
        width: 100%;
        height: 0;
        padding-bottom: 86.5%;
        position: relative;
    }
    .campus {
        cursor: pointer;
        display: block;
        position: absolute;
        width: $map-marker-width;
    }
    .campus-1 {
        top: topCalc(35%);
        left: leftCalc(19%);
    }
    .campus-2 {
        top: topCalc(37%);
        left: leftCalc(23%);
    }
    .campus-3 {
        top: topCalc(36%);
        left: leftCalc(28%);
    }
    .campus-4 {
        top: topCalc(39%);
        left: leftCalc(31%);
    }
    .campus-5 {
        top: topCalc(34%);
        left: leftCalc(33%);
    }
    .campus-6 {
        top: topCalc(43%);
        left: leftCalc(29%);
    }
    .campus-7 {
        top: topCalc(63%);
        left: leftCalc(40%);
    }
    .campus-8 {
        top: topCalc(53%);
        left: leftCalc(34%);
    }
    .campus-information {
        max-width: 500px;
        width: 100%;
        overflow: hidden;
    }
    .campus-selected__details {
        height: 150px;
        width: 60%;
        overflow-y: scroll;
    }
    .campus-img {
        width: 200px;
        background-size: cover;
    }
</style>