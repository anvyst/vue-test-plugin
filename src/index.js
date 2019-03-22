import Hello from './Hello.vue'
import Bye from './Bye.vue'

const TestPlugin = {
  install,
  Hello,
  Bye
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default TestPlugin

function install (Vue) {
  if (install.installed) {
    return
  }

  Vue.component(Hello.name, Hello)
  Vue.component(Bye.name, Bye)
}
