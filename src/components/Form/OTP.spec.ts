import { mount } from "@vue/test-utils";
import OTP from "./OTP.vue";
import { describe, it, expect } from "vitest";

describe("Component: OTP", () => {
  const wrapper = mount(OTP);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
