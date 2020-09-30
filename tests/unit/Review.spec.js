import Review from "@/components/Review.vue"
import store from "@/store/index.js"
import CloseButton from "@/components/CloseButton.vue"

const { shallowMount, createLocalVue } = require("@vue/test-utils")

describe("tests for the Review-component", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(Review, {
    localVue,
    store,
    propsData: {
      event: {
        id: 4,
        name: "We love 2 code",
        date: "17 Oct",
        info:
          "Meetup for coders! Join this event to meet new code-loving friends!",
        image: "computer-1209641_640.jpg"
      }
    }
  })

  it("should show the Button component at the Review-component", () => {
    const actual = wrapper.find(".submitButton").exists()
    expect(actual).toBe(true)
  })

  it("should be able to see the CloseButton component at the Review-component", () => {
    const actual = wrapper.findComponent(CloseButton).exists()
    expect(actual).toBe(true)
  })

  it("Should call submitReviewButtonPressed on form submit", async () => {
    const fn = jest.fn()
    wrapper.vm.submitReviewButtonPressed = fn
    wrapper.find(".submitButton").trigger("click")
    await wrapper.vm.$nextTick()
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
