import { mount } from "@vue/test-utils";
import Card from "./Card.vue";
import { describe, it, expect } from "vitest";

describe("Component: Card", () => {
  const wrapper = mount(Card);

  it("Renders the component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
