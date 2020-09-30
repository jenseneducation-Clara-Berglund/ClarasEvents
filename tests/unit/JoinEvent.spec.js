import JoinEvent from "@/views/JoinEvent.vue"
import Form from "@/components/Form.vue"
import store from "@/store/index.js"

const { shallowMount, createLocalVue } = require("@vue/test-utils")

it("should be able to see the Form-component at the JoinEvent view", () => {
  const localVue = createLocalVue()
  const $route = {
    params: { id: 2 }
  }
  const wrapper = shallowMount(JoinEvent, {
    localVue,
    mocks: {
      $route
    },
    store
  })
  const actual = wrapper.findComponent(Form).exists()
  expect(actual).toBe(true)
})
