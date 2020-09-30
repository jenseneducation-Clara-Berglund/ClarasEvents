import Profile from "@/views/Profile.vue"
import Review from "@/components/Review.vue"
import store from "@/store/index.js"

const { shallowMount, createLocalVue } = require("@vue/test-utils")

describe("Tests for Profile view", () => {
  // it("should show the Review-component when the clicked-event is emitted from the button", async () => {
  //   const localVue = createLocalVue()
  //   const wrapper = shallowMount(Profile, {
  //     localVue,
  //     store
  //   })

  //   wrapper.findComponent(Button).vm.$emit("clicked")
  //   await wrapper.vm.$nextTick()
  //   const actual = wrapper.findComponent(Review).exists()
  //   expect(actual).toBe(true)
  // })

  it("should set selected event when reviewButton was clicked", () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(Profile, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    })
    wrapper.vm.reviewButtonClicked({
      id: 8
    })
    expect(wrapper.vm.selectedEvent.id).toBe(8)
  })

  it("should set set the reviewModal boolean to true when reviewButton was clicked", () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(Profile, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    })

    wrapper.vm.reviewButtonClicked({
      id: 8
    })
    expect(wrapper.vm.showReviewModal).toBe(true)
  })

  it("should hide reviewModal if close event is received", async () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(Profile, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    })
    wrapper.vm.showReviewModal = true
    await wrapper.vm.$nextTick()
    wrapper.findComponent(Review).vm.$emit("close")
    expect(wrapper.vm.showReviewModal).toBe(false)
  })
  it("should null selectedEvent if close event is received", async () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(Profile, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    })
    wrapper.vm.reviewButtonClicked({
      id: 8
    })
    await wrapper.vm.$nextTick()
    wrapper.findComponent(Review).vm.$emit("close")
    expect(wrapper.vm.selectedEvent).toBe(null)
  })
})
