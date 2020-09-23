// const { create } = require("core-js/fn/object");
// import VueRouter from "vue-router";
import Home from "@/views/Home.vue"
import Button from "@/components/Button.vue"
import EventItem from "@/components/EventItem.vue"

const { shallowMount, createLocalVue } = require("@vue/test-utils")

it("should be able to see the myProfileButton component at the home view", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(Home, {
    localVue
  })

  const actual = wrapper.findComponent(Button).exists()
  expect(actual).toBe(true)
})

it("should be able to see upcoming events at the home view", () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(Home, {
    localVue
  })

  const actual = wrapper.findComponent(EventItem).exists()
  expect(actual).toBe(true)
})
