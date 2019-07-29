import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Home from './components/Home.vue';
import store from './store';

Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: '/', component: Home }
    ]
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
