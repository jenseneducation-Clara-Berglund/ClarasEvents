import EventItem from "@/components/EventItem.vue"
const { shallowMount } = require("@vue/test-utils")

describe("EventItem Tests", () => {
  const wrapper = shallowMount(EventItem, {
    propsData: {
      event: {
        image: "https://example.com/",
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
  it("should be able to see info of the event", () => {
    const expected = "hej3"
    const actual = wrapper.find(".info").text()
    expect(actual).toBe(expected)
  })
  it("should be able to see the image of the event", () => {
    const expected = "https://example.com/"
    const actual = wrapper.find(".image").attributes().src
    expect(actual).toBe(expected)
  })
})
