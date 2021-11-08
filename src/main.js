import Vue from 'vue'
import App from './App.vue'
import './assets/bootstrap.min.css'
Vue.config.productionTip = false

//
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
const opt = {

    theme: {
        light: true,
    },

    themes: {
        light: {
            primary: "#4682b4",
            secondary: "#b0bec5",
            accent: "#8c9eff",
            error: "#b71c1c",
        },
    },
}
Vue.use(Vuetify);

new Vue({
    render: h => h(App),
    vuetify: new Vuetify(opt),
}).$mount('#app')