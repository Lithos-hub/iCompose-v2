import { mount } from "@vue/test-utils";
import Dialog from "./Dialog.vue";
import { describe, it, expect } from "vitest";

describe("Component: Dialog", () => {
  const wrapper = mount(Dialog);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
