import chaButton from './components/Button'
import chaInput from './components/Image'
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
    { n: 'chaButton', c: chaButton }
  ],
}
comp.install = Vue => {
  this.components.forEach(v => Vue.component(v.n, v.c))
}
export default comp