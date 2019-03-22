import Hello from './Hello.vue'

function plugin (Vue) {
  Vue.component('hello', Hello)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'

export {
  Hello,
  version
}
