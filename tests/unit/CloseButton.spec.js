import CloseButton from "@/components/CloseButton.vue"
const { shallowMount, createLocalVue } = require("@vue/test-utils")

describe("tests for the CloseButton component at EventDetail view", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(CloseButton, {
    localVue
  })
  it("should be able to see the CloseButton icon at the Eventdetail-view", () => {
    const actual = wrapper.find(".closeButtonImg").exists()
    expect(actual).toBe(true)
  })

  it("should emit the CloseButtonPressed event when clicked", async () => {
    wrapper.trigger("click")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().clicked).toBeTruthy()
  })
})
