import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Menu.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Menu, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
