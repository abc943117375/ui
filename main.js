// import Vue from "vue";
// import App from './App.vue'
// import './styles/utils.scss'
// import './styles/style.scss'
// Vue.config.productionTip = false;
// new Vue({
//   render: h => h(App)
// }).$mount("#app");

import chaButton from './components/Button/index.vue'
import chaInput from './components/Input'
import chaPopup from './components/Popup'
import chaSwitch from './components/Switch'
import chaTree from './components/Tree'

const comp = {
  components: [
    { n: 'chaButton', c: chaButton },
    { n: 'chaInput', c: chaInput },
    { n: 'chaPopup', c: chaPopup },
    { n: 'chaSwitch', c: chaSwitch },
    { n: 'chaTree', c: chaTree },
    // { n: 'chaButton', c: chaButton }
  ],
}
comp.install = (Vue, options) => {
  comp.components.forEach(v => Vue.component(v.n, v.c))
}
export default comp