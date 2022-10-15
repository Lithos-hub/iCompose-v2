import { mount } from "@vue/test-utils";
import SimpleTable from "./SimpleTable.vue";
import { describe, it, expect } from "vitest";

describe("Component: SimpleTable", () => {
  const wrapper = mount(SimpleTable);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
