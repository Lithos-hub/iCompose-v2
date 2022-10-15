import { mount } from "@vue/test-utils";
import Navbar from "./Navbar.vue";
import { describe, it, expect } from "vitest";

describe("Component: Navbar", () => {
  const wrapper = mount(Navbar);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
