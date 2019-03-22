import Hello from './Hello.vue'

let TestPlugin = {}
TestPlugin.install = function (Vue, options) {
  Vue.component('hello-component', Hello)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TestPlugin)
}

export default TestPlugin
