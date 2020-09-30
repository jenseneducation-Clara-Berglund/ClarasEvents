import EventItem from "@/components/EventItem.vue"
const { shallowMount } = require("@vue/test-utils")

describe("EventItem Tests", () => {
  const wrapper = shallowMount(EventItem, {
    propsData: {
      event: {
        image: "bunny-1149060_640.jpg",
        name: "hejname",
        date: "hej2",
        info: "hej3"
      }
    }
  })
  it("should be able to see the name of the event", () => {
    const expected = "hejname"
    const actual = wrapper.find(".name").text()
    expect(actual).toBe(expected)
  })
  it("should be able to see the date of the event", () => {
    const expected = "hej2"
    const actual = wrapper.find(".date").text()
    expect(actual).toBe(expected)
  })

  it("should be able to emit the clicked-event when clicked", async () => {
    wrapper.trigger("click")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().clicked).toBeTruthy()
  })
  it("should show the reviewButton event when showReviewButton is true", async () => {
    const wrapper = shallowMount(EventItem, {
      propsData: {
        event: {
          image: "bunny-1149060_640.jpg",
          name: "hejname",
          date: "hej2",
          info: "hej3"
        },
        showReviewButton: true
      }
    })
    expect(wrapper.find("#reviewButton").exists()).toBe(true)
  })
  it("should hide the reviewButton event when showReviewButton is false", async () => {
    const wrapper = shallowMount(EventItem, {
      propsData: {
        event: {
          image: "bunny-1149060_640.jpg",
          name: "hejname",
          date: "hej2",
          info: "hej3"
        },
        showReviewButton: false
      }
    })
    expect(wrapper.find("#reviewButton").exists()).toBe(false)
  })
  it("should emit review-button-clicked event when review button is clicked", async () => {
    const wrapper = shallowMount(EventItem, {
      propsData: {
        event: {
          image: "bunny-1149060_640.jpg",
          name: "hejname",
          date: "hej2",
          info: "hej3"
        },
        showReviewButton: true
      }
    })
    await wrapper.vm.$nextTick()
    wrapper.find("#reviewButton").trigger("click")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted("review-button-clicked")).toBeTruthy()
  })
})
