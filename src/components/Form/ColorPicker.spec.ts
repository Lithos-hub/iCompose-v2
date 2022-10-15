import { mount } from "@vue/test-utils";
import ColorPicker from "./ColorPicker.vue";
import { describe, it, expect } from "vitest";

describe("Component: ColorPicker", () => {
  const wrapper = mount(ColorPicker);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
