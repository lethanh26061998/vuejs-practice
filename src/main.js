import Vue from 'vue'
import vuetify from '@/_plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full'

import router from './_router/router'
import store from './_store'
import App from './App'
import { currency } from './currency'

import 'chartist/dist/chartist.min.css'

Vue.use(require('vue-chartist'))

Vue.use(VueSweetalert2);

// Use the provider immediately
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

/* eslint-disable no-new */


Vue.filter('currency', currency)


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
  vuetify: vuetify,
  store: store
});


