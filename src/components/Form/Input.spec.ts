import { mount } from "@vue/test-utils";
import Input from "./Input.vue";
import { describe, it, expect } from "vitest";

describe("Component: Input", () => {
  const wrapper = mount(Input);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
