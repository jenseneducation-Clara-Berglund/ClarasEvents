import Home from "@/views/Home.vue";
import EventDetail from "@/components/EventDetail.vue";
import store from "@/store/index.js";
const { shallowMount, createLocalVue } = require("@vue/test-utils");

describe("EventDetailTests", () => {
  it("should be able to se the event info at the EventDetail component", () => {
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
          image: "codeEvent.jpg",
        },
      },
    });

    const expected =
      "Meetup for coders! Join this event to meet new code-loving friends!";
    const actual = wrapper.find(".eventInfoContainer").text();
    expect(actual).toBe(expected);
  });
});
