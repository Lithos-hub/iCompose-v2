import { mount } from "@vue/test-utils";
import DatePicker from "./DatePicker.vue";
import { describe, it, expect } from "vitest";

describe("Component: DatePicker", () => {
  const wrapper = mount(DatePicker);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
