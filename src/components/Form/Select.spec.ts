import { mount } from "@vue/test-utils";
import Select from "./Select.vue";
import { describe, it, expect } from "vitest";

describe("Component: Select", () => {
  const wrapper = mount(Select);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
