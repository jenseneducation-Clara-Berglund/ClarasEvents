import Home from "@/views/Home.vue"
import store from "@/store/index.js"
import EventDetail from "@/components/EventDetail.vue"
const { shallowMount, createLocalVue } = require("@vue/test-utils")

// it("should be able to see the myProfileButton component at the home view", () => {
//   const localVue = createLocalVue()
//   const wrapper = shallowMount(Home, {
//     localVue,
//     store
//   })

//   const actual = wrapper.find("router-link").exists()
//   expect(actual).toBe(true)
// })

describe("Tests for modal in home-view", () => {
  const localVue = createLocalVue()
  it("should show the EventDetail component when 'showModal' is true at the homepage", async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    })

    wrapper.vm.showModal = true
    await wrapper.vm.$nextTick()
    const actual = wrapper.findComponent(EventDetail).exists()
    expect(actual).toBe(true)
  })

  it("should not show the EventDetail component when 'showModal' is false at the homepage", async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    })

    wrapper.vm.showModal = false
    await wrapper.vm.$nextTick()

    const actual = wrapper.findComponent(EventDetail).exists()
    expect(actual).toBe(false)
  })

  it("should close the modal when reciving the close event", async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      stubs: ["router-link", "router-view"]
    })

    wrapper.vm.showModal = true
    await wrapper.vm.$nextTick()
    await wrapper.findComponent(EventDetail).vm.$emit("close")
    const actual = wrapper.findComponent(EventDetail).exists()
    expect(actual).toBe(false)
  })
})
