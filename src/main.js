import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faEnvelope,  faKey, faLocation, faMap, faMessage, faMusic, faPhone, faSearch, faStar, faTable, faVoicemail, } from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* add icons to the library */
library.add( faEnvelope, faMap, faPhone, faMessage ,faMusic,faSearch,faStar,faKey,faPhone,faTable,faVoicemail,faLocation,faBars)


// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial)




Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



