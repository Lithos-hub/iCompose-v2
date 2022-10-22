import { mount } from "@vue/test-utils";
import CalendarGrid from "./CalendarGrid.vue";
import { describe, it, expect } from "vitest";

describe("Component: CalendarGrid", () => {
  const wrapper = mount(CalendarGrid);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
