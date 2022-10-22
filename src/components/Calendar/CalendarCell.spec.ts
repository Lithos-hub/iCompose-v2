import { mount } from "@vue/test-utils";
import CalendarCell from "./CalendarCell.vue";
import { describe, it, expect } from "vitest";

describe("Component: CalendarCell", () => {
  const wrapper = mount(CalendarCell);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
