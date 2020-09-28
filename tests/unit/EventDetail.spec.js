import Home from "@/views/Home.vue";
import EventDetail from "@/components/EventDetail.vue";
import store from "@/store/index.js";
const { shallowMount, createLocalVue } = require("@vue/test-utils");

describe("EventDetailTests", () => {
  const localVue = createLocalVue();
  it("should show the EventDetail component when 'showModal' is true at the homepage", async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
    });

    wrapper.vm.showModal = true;
    await wrapper.vm.$nextTick();
    const actual = wrapper.findComponent(EventDetail).exists();
    expect(actual).toBe(true);
  });

  it("should not show the EventDetail component when 'showModal' is false at the homepage", async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
    });

    wrapper.vm.showModal = false;
    await wrapper.vm.$nextTick();
    const actual = wrapper.findComponent(EventDetail).exists();
    expect(actual).toBe(false);
  });
});
