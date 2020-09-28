import Profile from "@/views/Profile.vue";
import Button from "@/components/Button.vue";
import Review from "@/components/Review.vue";
const { shallowMount, createLocalVue } = require("@vue/test-utils");

it("should show the Review-component when the clicked-event is emitted from the button", async () => {
  const localVue = createLocalVue();
  const wrapper = shallowMount(Profile, {
    localVue,
  });

  wrapper.findComponent(Button).vm.$emit("clicked");
  await wrapper.vm.$nextTick();
  const actual = wrapper.findComponent(Review).exists();
  expect(actual).toBe(true);
});
