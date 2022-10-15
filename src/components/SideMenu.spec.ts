import { mount } from "@vue/test-utils";
import SideMenu from "./SideMenu.vue";
import { describe, it, expect } from "vitest";

describe("Component: SideMenu", () => {
  const wrapper = mount(SideMenu, {
    stubs: ["router-link"],
  });

  it("Renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
