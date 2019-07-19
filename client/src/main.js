import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
import axios from 'axios'
// Vue.use(axios);

// axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// window.axios = axios
// window.API = API




// import './registerServiceWorker'

Vue.config.productionTip = false

import monev_navbar from './components/navbar/monev_navbar'
import monev_topbar   from './components/navbar/monev_topbar'
import monev_left_sidebar   from './components/navbar/monev_left_sidebar'






// import CKEditor from '@ckeditor/ckeditor5-vue';


// import body_atas   from './components/navbar/body_atas'
// import body_bawah   from './components/navbar/body_bawah'

// import monev_login   from './components/monev/auth/monev_login.vue'
// import monev_signin   from './components/monev/auth/monev_signin.vue'



import VueSweetalert2 from 'vue-sweetalert2';

Vue.component('app-monev_navbar', monev_navbar);
Vue.component('app-monev_topbar', monev_topbar);
Vue.component('app-monev_left_sidebar', monev_left_sidebar);


// Vue.component('app-body_atas', body_atas);
// Vue.component('app-body_bawah', body_bawah);

// Vue.component('app-monev_login', monev_login);
// Vue.component('app-monev_signin', monev_signin);

// axios.defaults.baseURL = 'http://localhost:8000/api/'


// window.axios = axios;





Vue.config.productionTip = false
Vue.use(VueSweetalert2);



import VueSession from 'vue-session'
Vue.use(VueSession)


// import VueSession from 'vue-session'
// Vue.use(VueSession);

// import cors from 'cors'
// Vue.use(cors);

// import vueresource from 'vue-resource'
// Vue.use(vueresource);





// import vue_resource from 'vue-resource'
// Vue.use (vue_resource);

// var VueResource = require('vue-resource');
// Vue.use(VueResource);






 




/* eslint-disable no-new */
new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template:'<App/>'

// })
  router,
  render: h => h(App),
}).$mount('#app');
