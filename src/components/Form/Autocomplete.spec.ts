import { mount } from "@vue/test-utils";
import Autocomplete from "./Autocomplete.vue";
import { describe, it, expect } from "vitest";

describe("Component: Autocomplete", () => {
  const wrapper = mount(Autocomplete);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
