import Review from "@/components/Review.vue"
import Button from "@/components/Button.vue"
import CloseButton from "@/components/CloseButton.vue"

const { shallowMount, createLocalVue } = require("@vue/test-utils")

describe("tests for the Review-component", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(Review, {
    localVue
  })

  it("should show the Button component at the Review-component", () => {
    const actual = wrapper.findComponent(Button).exists()
    expect(actual).toBe(true)
  })

  it("should be able to see the CloseButton component at the Review-component", () => {
    const actual = wrapper.findComponent(CloseButton).exists()
    expect(actual).toBe(true)
  })

  it("should emit the CloseButtonPressed event when clicked", async () => {
    wrapper.trigger("click")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().clicked).toBeTruthy()
  })
})
