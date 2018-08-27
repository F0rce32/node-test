import Vue from 'vue';
import Framework7 from 'framework7/dist/js/framework7.js';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.js';
import Routes from './routes.js';
import App from './app.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Framework7Vue, Framework7, VueAxios, axios);

new Vue({
  el: '#app',
  template: '<app/>',
  framework7: {
    id: 'io.framework7.testapp',
    name: 'Videos',
    theme: 'auto',
    routes: Routes 
  },
  components: {
    app: App
  }
});

