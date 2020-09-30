import Form from "@/components/Form.vue"
const { shallowMount } = require("@vue/test-utils")

describe("Form tests", () => {
  it("Should show three labels for fName, lName and email", () => {
    const wrapper = shallowMount(Form, {
    })
    const actual = wrapper.findAll("label").length
    const expected = 3
    expect(actual).toBe(expected)
  })
  it("Should show three inputs for fName, lName and email", () => {
    const wrapper = shallowMount(Form, {
    })
    const actual = wrapper.findAll("input").length
    const expected = 3
    expect(actual).toBe(expected)
  })
  it("Should call submitButtonPressed on form submit", async () => {
    const fn = jest.fn()
    const wrapper = shallowMount(Form, {
    })
    wrapper.vm.submitButtonPressed = fn
    wrapper.find(".submitButton").trigger("click")
    await wrapper.vm.$nextTick()
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
