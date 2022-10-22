import { mount } from "@vue/test-utils";
import CalendarEvent from "./CalendarEvent.vue";
import { describe, it, expect } from "vitest";

describe("Component: CalendarEvent", () => {
  const wrapper = mount(CalendarEvent);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
