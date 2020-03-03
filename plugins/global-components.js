import Vue from 'vue'
import SvgIcon from '@/components/global/SvgIcon'
import SCButton from '@/components/global/SCButton'

const install = (Vue) => {
    Vue.component('icon', SvgIcon)
    Vue.component('sc-button', SCButton)
}

Vue.use(install)