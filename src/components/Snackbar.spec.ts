import { mount } from "@vue/test-utils";
import Snackbar from "./Snackbar.vue";
import { describe, it, expect } from "vitest";

describe("Component: Snackbar", () => {
  const wrapper = mount(Snackbar);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
