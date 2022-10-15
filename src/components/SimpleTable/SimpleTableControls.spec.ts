import { mount } from "@vue/test-utils";
import SimpleTableControls from "./SimpleTableControls.vue";
import { describe, it, expect } from "vitest";

describe("Component: SimpleTableControls", () => {
  const wrapper = mount(SimpleTableControls);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
