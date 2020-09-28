import Home from "@/views/Home.vue";
import Button from "@/components/Button.vue";
import store from "@/store/index.js";
const { shallowMount, createLocalVue } = require("@vue/test-utils");

it("should be able to see the myProfileButton component at the home view", () => {
  const localVue = createLocalVue();
  const wrapper = shallowMount(Home, {
    localVue,
    store,
  });

  const actual = wrapper.findComponent(Button).exists();
  expect(actual).toBe(true);
});

describe("Tests for modal in home-view", () => {
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

  it("should close the modal when reciving the close event", async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
    });

    wrapper.vm.showModal = true;
    await wrapper.vm.$nextTick();
    await wrapper.findComponent(EventDetail).vm.$emit("close");
    // await wrapper.vm.$nextTick();

    const actual = wrapper.findComponent(EventDetail).exists();
    expect(actual).toBe(false);
  });
});
