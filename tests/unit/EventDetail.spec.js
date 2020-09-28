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
        image: "codeEvent.jpg"
      }
    }
  })
  it("should be able to se the event info at the EventDetail component", () => {
    const expected =
      "Meetup for coders! Join this event to meet new code-loving friends!"
    const actual = wrapper.find(".eventInfoContainer").text()
    expect(actual).toBe(expected)
  })
  it("should be able to see the CloseButton component at the EventDetail view", () => {
    const actual = wrapper.findComponent(CloseButton).exists()
    expect(actual).toBe(true)
  })
})
