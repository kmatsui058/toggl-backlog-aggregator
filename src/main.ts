import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import initialize from '@/plugin/initialize'
import VueThinModal from 'vue-thin-modal'
import 'vue-thin-modal/dist/vue-thin-modal.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueThinModal)
Vue.config.productionTip = false
initialize()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
