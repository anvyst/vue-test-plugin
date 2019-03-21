import { shallowMount } from '@vue/test-utils'
import Hello from '@/Hello.vue'

describe('Hello.vue test', () => {
  it('returns correct msg', () => {
    const msg = "Hello world"
    const wrapper = shallowMount(Hello)

    expect(wrapper.text()).toMatch(msg)
  })
})
