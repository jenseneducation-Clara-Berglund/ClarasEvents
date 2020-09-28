import Button from "@/components/Button.vue"
const { shallowMount, createLocalVue } = require("@vue/test-utils")

describe("tests for the Button component at EventDetail view", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(Button, {
    localVue
  })

  it("should emit the clicked-event when clicked", async () => {
    wrapper.trigger("click")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().clicked).toBeTruthy()
  })
})
