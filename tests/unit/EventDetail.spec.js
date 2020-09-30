import EventDetail from "@/components/EventDetail.vue"
import store from "@/store/index.js"
import CloseButton from "@/components/CloseButton.vue"

const { shallowMount, createLocalVue } = require("@vue/test-utils")

describe("EventDetailTests", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(EventDetail, {
    localVue,
    store,

    propsData: {
      event: {
        id: 1,
        name: "We love code",
        date: "17 Oct",
        info:
          "Meetup for coders! Join this event to meet new code-loving friends!",
        image: "bunny-1149060_640.jpg"
      }
    }
  })
  it("should be able to se the event info", () => {
    const expected =
      "Meetup for coders! Join this event to meet new code-loving friends!"
    const actual = wrapper.find(".eventInfoContainer").text()
    expect(actual).toBe(expected)
  })
  it("should be able to se the event date", () => {
    const expected =
      "17 Oct"
    const actual = wrapper.find(".eventDateContainer").text()
    expect(actual).toBe(expected)
  })
  it("should be able to se the join event button", () => {
    const actual = wrapper.find(".actionButtonContainer").exists()
    expect(actual).toBe(true)
  })
  it("should emit 'join-event' when joinEvent button is pressed", async () => {
    wrapper.find(".actionButtonContainer").trigger("click")
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted("join-event")).toBeTruthy()
  })
  it("should be able to see the CloseButton component", () => {
    const actual = wrapper.find(CloseButton).exists()
    expect(actual).toBe(true)
  })
})
