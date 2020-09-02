import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Searchbar from "./Searchbar";

const setup = () => {
  return shallow(<Searchbar />);
};

test("component renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-searchbar");
  expect(component.length).toBe(1);
});
