import { mount } from "@vue/test-utils";
import CalendarDays from "./CalendarDays.vue";
import { describe, it, expect } from "vitest";

describe("Component: CalendarDays", () => {
  const wrapper = mount(CalendarDays);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
