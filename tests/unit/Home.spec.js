import Home from "@/views/Home.vue";
import Button from "@/components/Button.vue";
import store from "@/store/index.js";
const { shallowMount, createLocalVue } = require("@vue/test-utils");

it("should be able to see the myProfileButton component at the home view", () => {
  const localVue = createLocalVue();
  const wrapper = shallowMount(Home, {
    localVue,
    store
  });

  const actual = wrapper.findComponent(Button).exists();
  expect(actual).toBe(true);
});
