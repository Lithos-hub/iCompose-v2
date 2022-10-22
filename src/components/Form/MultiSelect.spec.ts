import { mount } from "@vue/test-utils";
import MultiSelect from "./MultiSelect.vue";
import { describe, it, expect } from "vitest";

describe("Component: MultiSelect", () => {
  const wrapper = mount(MultiSelect);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
