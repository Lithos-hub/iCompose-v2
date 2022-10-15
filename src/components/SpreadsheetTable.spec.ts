import { mount } from "@vue/test-utils";
import SpreadsheetTable from "./SpreadsheetTable.vue";
import { describe, it, expect } from "vitest";

describe("Component: SpreadsheetTable", () => {
  const wrapper = mount(SpreadsheetTable);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
