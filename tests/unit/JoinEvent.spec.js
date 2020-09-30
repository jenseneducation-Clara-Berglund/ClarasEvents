import JoinEvent from "@/views/JoinEvent.vue"
import Form from "@/components/Form.vue"
const { shallowMount, createLocalVue } = require("@vue/test-utils")

it("should be able to see the Form-component at the JoinEvent view", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(JoinEvent, {
    localVue

  })
  const actual = wrapper.findComponent(Form).exists()
  expect(actual).toBe(true)
})
