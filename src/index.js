import Hello from '@/Hello.vue'

const TestComponent = {
  Hello,
  install: function(Vue) {
    Vue.component(Hello.name, Hello)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TestComponent)
}

export default TestComponent
