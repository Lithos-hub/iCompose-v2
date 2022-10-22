import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import { describe, it, expect } from "vitest";

describe("Component: Button", () => {
  const wrapper = mount(Button);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
