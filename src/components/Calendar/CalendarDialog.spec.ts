import { mount } from "@vue/test-utils";
import CalendarDialog from "./CalendarDialog.vue";
import { describe, it, expect } from "vitest";

describe("Component: CalendarDialog", () => {
  const wrapper = mount(CalendarDialog);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
