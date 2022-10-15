import { mount } from "@vue/test-utils";
import Textarea from "./Textarea.vue";
import { describe, it, expect } from "vitest";

describe("Component: Textarea", () => {
  const wrapper = mount(Textarea);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
